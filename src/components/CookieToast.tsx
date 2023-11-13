"use client";

import { useCustomToast } from '@/hooks/use-custom-toast';
import { useEffect } from 'react';

const CookieToast = () => {

    const { cookieToast } = useCustomToast();

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem('cookie_consent');
        if (!hasAcceptedCookies) {
            return cookieToast();
        }
    }, []);

    return null;
}

export default CookieToast
