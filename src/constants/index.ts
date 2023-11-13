import { Problem } from "@/types/problems";
import { ColumnDef } from "@tanstack/react-table";
import { Archive, BookOpen, Code, Database, FileText, FlaskConical, History, Keyboard, Layout } from "lucide-react";

export const companies = [
    {
        id: 1,
        src: '/images/comp1.svg',
        name: 'Google',
    },
    {
        id: 2,
        src: '/images/comp2.svg',
        name: 'Microsoft',
    },
    {
        id: 3,
        src: '/images/comp3.svg',
        name: 'Facebook',
    },
    {
        id: 4,
        src: '/images/comp4.svg',
        name: 'Amazon',
    },
    {
        id: 5,
        src: '/images/comp5.svg',
        name: 'Apple',
    },
    {
        id: 6,
        src: '/images/comp6.svg',
        name: 'Netflix',
    },
    {
        id: 7,
        src: '/images/comp7.svg',
        name: 'Tesla',
    }
];

export const features = [
    {
        id: 1,
        title: "Smart coding challenges",
        description: "Sharpen your skills with AI-generated coding challenges tailored for you.",
        src: "/icons/feature1.svg",
    }, {
        id: 2,
        title: "Personalized feedback",
        description: "Recieve AI-powered feedback on your code within seconds.",
        src: "/icons/feature2.svg",
    }, {
        id: 3,
        title: "Real-World Scenarios",
        description: "Solve coding challenges that mimic real-world programming scenarios.",
        src: "/icons/feature3.svg",
    },
    {
        id: 4,
        title: "Adaptive Learning Path",
        description: " Create a personalized learning path based on your goals and skill level.",
        src: "/icons/feature4.svg",
    },
    {
        id: 5,
        title: "Interview Prep",
        description: "Prepare for technical interviews with a collection of interview-specific coding challenges.",
        src: "/icons/feature5.svg",
    },
    {
        id: 6,
        title: "Community Interaction",
        description: "Connect with other developers, ask questions, and engage in code review simulations.",
        src: "/icons/feature6.svg",
    },
    {
        id: 7,
        title: "Code Quality Insights",
        description: "Improve your code quality with AI insights on best practices and performance.",
        src: "/icons/feature7.svg",
    },
    {
        id: 8,
        title: "Skill Tracking",
        description: "Track your progress and see which coding skills you excel in and where you need improvement.",
        src: "/icons/feature8.svg",
    },
];

export const plans = [
    {
        title: 'Starter',
        price: '$9.99',
        tagline: 'For coding enthusiasts',
        features: [
            '10 Coding Challenges',
            'Basic Code Suggestion',
            'Community Support',
            'Weekly Practice Sessions',
        ],
    },
    {
        title: 'Pro',
        price: '$19.99',
        tagline: 'For serious coders',
        features: [
            'Unlimited Coding Challenges',
            'Advanced Code Suggestion',
            'Priority Support',
            'Monthly Coding Contests',
            'Custom Code Themes',
            'Access to Premium Content',
        ],
    },
];

export const studyPlans = [
    {
        id: 1,
        title: "Coding Mastery",
        description: "Sharpen your coding skills",
        button: "Start Learning"
    },
    {
        id: 2,
        title: "Interview Prep",
        description: "Ace your technical interviews",
        button: "Get Prepared"
    },
    {
        id: 3,
        title: "Learn New Tech",
        description: "Master the latest technologies",
        button: "Explore Now"
    }
];

export const popularCourses = [
    {
        id: 1,
        title: "Web Basics",
        description: "Master web development",
    },
    {
        id: 2,
        title: "Data & Algorithms",
        description: "Master coding concepts",
    },
    {
        id: 3,
        title: "JS Essentials",
        description: "Become a JavaScript expert",
    },
    {
        id: 4,
        title: "Python 101",
        description: "Start coding with Python",
    },
    {
        id: 5,
        title: "ML Intro",
        description: "Explore machine learning",
    },
    {
        id: 6,
        title: "App Development",
        description: "Create mobile apps",
    },
];

export const topics = [
    {
        id: 1,
        title: "All",
        href: "/problems/all",
        Icon: Archive
    },
    {
        id: 2,
        title: "JavaScript",
        href: "/problems/javascript",
        Icon: Code
    },
    {
        id: 3,
        title: "Python",
        href: "/problems/python",
        Icon: Code
    },
    {
        id: 4,
        title: "Database",
        href: "/problems/database",
        Icon: Database
    }
];

export const columns: ColumnDef<Problems>[] = [
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "acceptance",
        header: "Acceptance",
    },
    {
        accessorKey: "difficulty",
        header: "Difficulty",
    },
];

export const problems: Problem[] = [];

export const settings = [
    {
        title: "Layout",
        Icon: Layout,
        setting: "layout"
    },
    {
        title: "Code Editor",
        Icon: Code,
        setting: "editor"
    },
    {
        title: "Keyboard Shortcuts",
        Icon: Keyboard,
        setting: "shortcuts"
    }
];

// export const problemTabss = [
//     {
//         id: 1,
//         title: "Description",
//         href: `/problem/${window.location}`,
//         icon: FileText
//     },
//     {
//         id: 2,
//         title: "Editorial",
//         href: `/problem/${window.location}/editorial`,
//         icon: BookOpen
//     },
//     {
//         id: 3,
//         title: "Solutions",
//         href: `/problem/${window.location}/solutions`,
//         icon: FlaskConical
//     },
//     {
//         id: 4,
//         title: "Submissions",
//         href: `/problem/${window.location}/submissions`,
//         icon: History
//     }
// ];