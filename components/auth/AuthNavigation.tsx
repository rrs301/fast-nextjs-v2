import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AuthNavigation() {
    const pathname = usePathname()
    const isSignIn = pathname.includes('/sign-in')

    return (
        <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
                {isSignIn ? "Don't have an account? " : "Already have an account? "}
                <Link 
                    href={isSignIn ? "/sign-up" : "/sign-in"}
                    className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                    {isSignIn ? "Sign up" : "Sign in"}
                </Link>
            </p>
        </div>
    )
}
