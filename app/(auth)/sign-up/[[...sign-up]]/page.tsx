import { SignUp } from '@clerk/nextjs'
import AuthNavigation from '@/components/auth/AuthNavigation'

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
                    <p className="text-gray-600">Join us today and get started</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <SignUp 
                        appearance={{
                            elements: {
                                formButtonPrimary: 'bg-green-600 hover:bg-green-700 text-sm normal-case',
                                card: 'shadow-none',
                                headerTitle: 'hidden',
                                headerSubtitle: 'hidden'
                            }
                        }}
                        redirectUrl="/"
                        signInUrl="/sign-in"
                    />
                </div>
                <AuthNavigation />
            </div>
        </div>
    )
}