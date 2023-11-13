import { LucideProps, User } from "lucide-react";

export const Icons = {
    user: User,
    logo: (props: LucideProps) => (
        <svg {...props} width="404" height="404" viewBox="0 0 404 404" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_24_5)">
                <path d="M38.6569 190.343L137.343 91.6569C140.467 88.5327 145.533 88.5327 148.657 91.6569L174.883 117.883C178.007 121.007 178.007 126.072 174.883 129.197L113.736 190.343C110.612 193.467 110.612 198.533 113.736 201.657L174.883 262.803C178.007 265.928 178.007 270.993 174.883 274.117L148.657 300.343C145.533 303.467 140.467 303.467 137.343 300.343L38.6569 201.657C35.5327 198.533 35.5327 193.467 38.6569 190.343Z" fill="#0F172A" />
                <path d="M166.117 317.803L282.264 201.657C285.388 198.533 285.388 193.467 282.264 190.343L166.117 74.1965C162.993 71.0723 162.993 66.007 166.117 62.8828L192.343 36.6569C195.467 33.5327 200.533 33.5327 203.657 36.6569L357.343 190.343C360.467 193.467 360.467 198.533 357.343 201.657L203.657 355.343C200.533 358.467 195.467 358.467 192.343 355.343L166.117 329.117C162.993 325.993 162.993 320.928 166.117 317.803Z" fill="#0F172A" />
            </g>
            <defs>
                <filter id="filter0_d_24_5" x="0.313721" y="0.313721" width="403.373" height="403.373" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="4" dy="6" />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.0901961 0 0 0 0 0.164706 0 0 0 0.11 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_24_5" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_24_5" result="shape" />
                </filter>
            </defs>
        </svg>
    ),
    google: (props: LucideProps) => (
        <svg {...props} viewBox='0 0 24 24'>
            <path
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                fill='#4285F4'
            />
            <path
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                fill='#34A853'
            />
            <path
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                fill='#FBBC05'
            />
            <path
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                fill='#EA4335'
            />
            <path d='M1 1h22v22H1z' fill='none' />
        </svg>
    ),
    notification: (props: LucideProps) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path>
                <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"></path>
            </g>
        </svg>
    ),
    dashboard: (props: LucideProps) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M6.75 3C3.88235 3 3 3.88235 3 6.75C3 9.61765 3.88235 10.5 6.75 10.5C9.61765 10.5 10.5 9.61765 10.5 6.75C10.5 3.88235 9.61765 3 6.75 3Z" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M6.75 13.5C3.88235 13.5 3 14.3824 3 17.25C3 20.1176 3.88235 21 6.75 21C9.61765 21 10.5 20.1176 10.5 17.25C10.5 14.3824 9.61765 13.5 6.75 13.5Z" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17.25 13.5C14.3824 13.5 13.5 14.3824 13.5 17.25C13.5 20.1176 14.3824 21 17.25 21C20.1176 21 21 20.1176 21 17.25C21 14.3824 20.1176 13.5 17.25 13.5Z" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17.25 3C14.3824 3 13.5 3.88235 13.5 6.75C13.5 9.61765 14.3824 10.5 17.25 10.5C20.1176 10.5 21 9.61765 21 6.75C21 3.88235 20.1176 3 17.25 3Z" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    ),
    js: (props: LucideProps) => (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>nodejs</title> <rect width="24" height="24" fill="none"></rect> <path d="M12,1.85a1.62,1.62,0,0,0-.78.2L3.78,6.35A1.58,1.58,0,0,0,3,7.71v8.58a1.58,1.58,0,0,0,.78,1.36l2,1.12a3.24,3.24,0,0,0,1.71.47,2.07,2.07,0,0,0,2.21-2.33V8.44a.22.22,0,0,0-.22-.22H8.5a.22.22,0,0,0-.23.22v8.47c0,.66-.68,1.31-1.77.76l-2-1.17a.26.26,0,0,1-.11-.21V7.71a.24.24,0,0,1,.11-.21l7.44-4.29a.22.22,0,0,1,.22,0L19.55,7.5a.24.24,0,0,1,.11.21v8.58a.26.26,0,0,1-.11.21l-7.44,4.29a.24.24,0,0,1-.23,0L10,19.65a.26.26,0,0,0-.21,0,4.22,4.22,0,0,1-1.12.51c-.12,0-.31.11.07.32l2.48,1.47a1.55,1.55,0,0,0,1.56,0l7.44-4.29A1.58,1.58,0,0,0,21,16.29V7.71a1.58,1.58,0,0,0-.78-1.36l-7.44-4.3a1.59,1.59,0,0,0-.78-.2M14,8c-2.12,0-3.39.89-3.39,2.39s1.26,2.08,3.3,2.28c2.43.24,2.62.6,2.62,1.08,0,.83-.67,1.18-2.23,1.18-2,0-2.4-.49-2.55-1.47a.23.23,0,0,0-.22-.18h-1a.21.21,0,0,0-.21.22c0,1.24.68,2.74,3.94,2.74,2.35,0,3.7-.93,3.7-2.55s-1.08-2-3.37-2.34-2.54-.46-2.54-1,.2-1,1.91-1c1.5,0,2.09.33,2.32,1.36a.21.21,0,0,0,.21.17h1a.19.19,0,0,0,.15-.07.16.16,0,0,0,.05-.16C17.56,8.82,16.38,8,14,8Z"></path> </g></svg>
    )
}