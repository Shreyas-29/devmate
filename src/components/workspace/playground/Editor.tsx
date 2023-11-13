"use client";

import { cn } from '@/lib/utils';
import { Problem } from '@/types/problems';
import { KindeUser, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { javascript } from "@codemirror/lang-javascript";
import { cursorBlinkingStore, useFontSizeStore, useLanguageStore, useResultStore } from '@/store';
import { Bug, ChevronDown, Code, Loader2, Lock, ShieldCheck, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Editor as CodeEditor } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/Tooltip"
import { toast } from '@/hooks/use-toast';
import { problems } from '@/lib/problems';
import { updateUser } from '@/actions';


interface Props {
    user: KindeUser;
    problem: Problem;
    success: boolean;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>
    solved: boolean;
    setSolved: React.Dispatch<React.SetStateAction<boolean>>
}

const languages = ["c++", "java", "python", "javascript", "typescript", "c", "c#"];

const Editor: React.FC<Props> = ({ user, problem, success, solved, setSuccess, setSolved }) => {

    let saveTimeout: NodeJS.Timeout;

    const router = useRouter();

    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

    const pathname = usePathname();
    const slug = pathname.split("/")?.[2];

    const { fontSize } = useFontSizeStore();

    const { language, setLanguage } = useLanguageStore();

    const { cursor } = cursorBlinkingStore();

    const { result, setResult } = useResultStore();

    const [userCode, setUserCode] = useState<string | undefined>(problem?.starterCode);
    const [cursorPosition, setCursorPosition] = useState({ lineNumber: 1, column: 1 });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    // const [error, setError] = useState<string | any>("");

    const saveCodeToLocalStorage = (slug: string | undefined, code: string | undefined) => {
        if (slug) {
            localStorage.setItem(`userCode_${slug}`, code || '');
        }
    };

    const getStoredCode = (slug: string | undefined): string => {
        return localStorage.getItem(`userCode_${slug}`) || '';
    };

    const handleClearLocalStorage = () => {
        localStorage.removeItem(`userCode_${problem?.slug}`);
    };

    // const handleCodeChange = (value: string | undefined) => {
    //     setUserCode(value);
    //     setIsLoading(true);

    //     clearTimeout(saveTimeout);

    //     saveTimeout = setTimeout(() => {
    //         saveCodeToLocalStorage(problem?.slug, value);
    //         setIsLoading(false);
    //     }, 3000);
    // };

    const handleCodeChange = (value: string | undefined) => {
        setUserCode(value);
        setIsLoading(true);
        // Clear any existing timeout
        clearTimeout(saveTimeout);

        // Set a new timeout to save the code after 2 seconds
        saveTimeout = setTimeout(() => {
            // Use the updated userCode in this callback
            const updatedCode = value?.slice(value.indexOf(problem?.starterFunctionName!));

            // Save the modified code to local storage
            saveCodeToLocalStorage(problem?.slug, updatedCode);

            // Update the loading state
            setIsLoading(false);
        }, 2000);
    };

    const handleEditorDidUpdate = (editor: editor.IStandaloneCodeEditor): void => {
        if (editor) {
            // Save a reference to the editor
            editorRef.current = editor;

            // Set up an event listener to track cursor position
            editor.onDidChangeCursorPosition((event: editor.ICursorPositionChangedEvent) => {
                setCursorPosition({
                    lineNumber: event.position.lineNumber,
                    column: event.position.column,
                });
            });
        }
    };

    useEffect(() => {
        // Retrieve code from local storage on component mount
        const storedCode = getStoredCode(problem?.slug);
        setUserCode(storedCode || problem?.starterCode || '//Start coding here');
        setIsLoading(false);
    }, [problem]);


    const handleSubmit = () => {
        if (!user) {
            toast({
                title: "Please login to submit",
                description: "You need to log in to submit your code",
                variant: "destructive"
            });
            return;
        }

        try {
            setIsSubmitting(true);

            // Create a new variable to hold the modified code
            const modifiedCode = userCode?.slice(userCode?.indexOf(problem?.starterFunctionName!));
            console.log("code: ", modifiedCode);

            let cb;
            try {
                cb = eval(`return ${modifiedCode}`)();
            } catch (error) {
                console.error("Error evaluating code:", error);
            }

            const handler = problems[slug]?.handlerFunction;

            console.log("code2: ", cb, typeof handler);


            if (typeof handler === 'function') {
                const success = handler(cb);

                if (success) {
                    toast({
                        description: "Your code passed all test cases 🎉",
                    });
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 4000);

                    // Update the user problem solved status
                    updateUser(user?.id!, slug);

                    setSolved(true);
                }
            }
        } catch (error: any) {
            setResult(error?.message || "Oops! Something went wrong");
            setIsSubmitting(false);
            console.log("error: ", error);

            if (error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")) {
                toast({
                    title: "Your code failed some test cases",
                    description: "Your code failed some test cases",
                    variant: "destructive"
                });
            } else {
                toast({
                    title: "Oops! Something went wrong",
                    description: "Please try again later",
                    variant: "destructive"
                });
            }
        } finally {
            router.refresh();
            setIsSubmitting(false);
        }
    };


    return (
        <div className={cn(
            "rounded-md border flex flex-col relative max-h-full overflow-hidden border-zinc-700 w-full h-[calc(60%-2px)] bg-[#1e1e1e]",
        )}>

            {/* Options */}
            <nav className='flex flex-col w-full rounded-t-[6.6px] mb-2 items-start bg-neutral-800 border-b border-border select-none'>
                <div
                    className={cn(
                        "px-2 py-1 rounded active:scale-95 transition-all transform hover:bg-zinc-700/80 text-xs font-medium text-zinc-50 ease-out flex items-center gap-1 cursor-pointer m-0.5",
                    )}
                >
                    <Code className="w-4 h-4 text-green-500" />
                    Code
                </div>
                <div className="flex items-center justify-between w-full p-1 border-b border-neutral-800 bg-zinc-900">
                    <div className="flex items-center justify-start flex-1 space-x-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div className="flex items-center gap-1 px-2 py-1 text-xs font-medium capitalize transition-all ease-out rounded cursor-pointer hover:bg-zinc-700/80 text-zinc-400">
                                    {language}
                                    <ChevronDown className="w-4 h-4 text-current" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="">
                                {languages?.map((language, index) => (
                                    <DropdownMenuItem
                                        key={index}
                                        className="capitalize"
                                        onSelect={() => setLanguage(language)}
                                        disabled={language !== "javascript"}
                                    >
                                        {language}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <div className="flex items-center gap-1 px-2 py-1 text-xs font-medium transition-all ease-out rounded cursor-pointer hover:bg-zinc-700/80 text-zinc-400">
                                        Auto
                                        <ShieldCheck className="w-4 h-4 text-current" />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Upgrade to premium to use auto complete
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="flex items-end">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild onClick={handleClearLocalStorage}>
                                    <div className="flex items-center p-1 transition-all ease-out rounded cursor-pointer hover:bg-zinc-700/80 text-zinc-400">
                                        <Trash2 className="w-4 h-4 text-current" />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    Clear editor
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </nav>

            {/* Code Editor */}
            <div className="flex w-full h-full overflow-auto overflow-x-hidden select-none scrollbar-hide">
                {/* <CodeMirror
                    value={userCode}
                    theme={darcula}
                    extensions={[javascript()]}
                    style={{ fontSize: fontSize, width: "100%", height: "100%" }}
                    onChange={handleCodeChange}
                    className="code"
                /> */}
                <CodeEditor
                    language={language}
                    defaultValue={userCode}
                    onChange={handleCodeChange}
                    theme="vs-dark"
                    line={1}
                    saveViewState={true}
                    onMount={handleEditorDidUpdate}
                    // loading
                    options={{
                        fontSize: fontSize,
                        minimap: {
                            enabled: false,
                        },
                        scrollbar: {
                            vertical: 'hidden',
                            horizontal: 'hidden'
                        },
                        lineNumbers: "on",
                        // lineDecorationsWidth: 0,
                        // lineNumbersMinChars: 0,
                        glyphMargin: false,
                        folding: true,
                        renderLineHighlight: 'none',
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        wordWrap: 'on',
                        wrappingStrategy: 'advanced',
                        // wrappingIndent: 'indent',
                        wordWrapBreakAfterCharacters: '\\{\\}',
                        wordWrapBreakBeforeCharacters: '\\{\\}',
                        wordWrapColumn: 100,
                        fontFamily: 'JetBrains Mono',
                        tabSize: 2,
                        insertSpaces: false,
                        // suggest: {
                        //     showWords: false,
                        //     showMethods: false,
                        //     showFunctions: false,
                        //     showConstructors: false,
                        //     showFields: false,
                        //     showVariables: false,
                        //     showClasses: false,
                        //     showStructs: false,
                        //     showInterfaces: false,
                        //     showModules: false,
                        //     showProperties: false,
                        //     showEvents: false,
                        //     showOperators: false,
                        //     showUnits: false,
                        //     showValues: false,
                        //     showConstants: false,
                        //     showEnums: false,
                        //     showEnumMembers: false,
                        //     showKeywords: false,
                        //     showColors: false,
                        //     showFiles: false,
                        //     showReferences: false,
                        //     showFolders: false,
                        //     showTypeParameters: false,
                        //     showSnippets: false,
                        //     showUsers: false,
                        //     showIssues: false,
                        // },
                        quickSuggestions: false,
                        useTabStops: true,
                        showFoldingControls: 'always',
                        cursorBlinking: cursor,
                        formatOnPaste: true,
                        formatOnType: true,
                    }}
                    loading={
                        <div className="flex items-start justify-between flex-1 w-full h-full p-4 mb-auto">
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-4 rounded-full skeleton"></div>
                                <div className="w-16 h-4 rounded-full skeleton"></div>
                            </div>
                            <div className="w-16 h-4 rounded-full skeleton"></div>
                        </div>
                    }
                />
            </div>

            {/* Submission */}
            <div className="flex justify-between py-1 pl-3 pr-1 bg-[#1e1e1e] select-none">
                <div className="flex items-end">
                    <div className="text-xs select-none text-muted-foreground">
                        Ln {cursorPosition.lineNumber}, Col {cursorPosition.column}
                    </div>
                    <div className="w-px h-4 mx-2 bg-border"></div>
                    {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                    ) : (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            Saved to local
                        </div>
                    )}
                </div>
                <div className="relative flex items-center space-x-2">
                    <Button variant="ghost" size="iconSm">
                        <Bug className="w-4 h-4 text-current" />
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="px-4"
                        isLoading={isSubmitting}
                        onClick={handleSubmit}
                    >
                        Run
                    </Button>
                    <Button
                        variant="success"
                        size="sm"
                        className="px-4"
                        isLoading={isSubmitting}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Editor
