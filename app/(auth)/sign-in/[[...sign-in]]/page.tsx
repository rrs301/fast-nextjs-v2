import { SignIn } from '@clerk/nextjs'
import AuthNavigation from '@/components/auth/AuthNavigation'

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your account to continue</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <SignIn 
                        appearance={{
                            elements: {
                                formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-sm normal-case',
                                card: 'shadow-none',
                                headerTitle: 'hidden',
                                headerSubtitle: 'hidden'
                            }
                        }}
                        redirectUrl="/"
                        signUpUrl="/sign-up"
                    />
                </div>
                <AuthNavigation />
            </div>
        </div>
    )
}
