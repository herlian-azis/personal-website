// components/ui/Toast.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose: () => void;
}

const iconMap = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
};

const colorMap = {
    success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    error: "bg-red-500/10 border-red-500/20 text-red-400",
    info: "bg-blue-500/10 border-blue-500/20 text-blue-400",
};

export function Toast({
    message,
    type = "success",
    duration = 3000,
    onClose,
}: ToastProps) {
    const Icon = iconMap[type];

    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg backdrop-blur-sm ${colorMap[type]}`}
        >
            <Icon className="h-5 w-5 shrink-0" />
            <span className="text-sm font-medium text-foreground">
                {message}
            </span>
            <button
                onClick={onClose}
                className="ml-2 rounded-full p-1 hover:bg-white/10 transition-colors"
                aria-label="Close notification"
            >
                <X className="h-4 w-4" />
            </button>
        </motion.div>
    );
}

// Toast Context and Hook
import { createContext, useContext, ReactNode, useCallback } from "react";

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toast, setToast] = useState<{
        message: string;
        type: ToastType;
    } | null>(null);

    const showToast = useCallback((message: string, type: ToastType = "success") => {
        setToast({ message, type });
    }, []);

    const closeToast = useCallback(() => {
        setToast(null);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <AnimatePresence>
                {toast && (
                    <Toast message={toast.message} type={toast.type} onClose={closeToast} />
                )}
            </AnimatePresence>
        </ToastContext.Provider>
    );
}

export function useToast(): ToastContextType {
    const context = useContext(ToastContext);
    // Return fallback for SSR or when used outside provider
    if (!context) {
        return { showToast: () => { } };
    }
    return context;
}
