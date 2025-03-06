export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex justify-center border-b border-gray-200 pb-4">
            hello their
            
        </div>  
        {children}
    </div>
}