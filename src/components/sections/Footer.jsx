export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer >
            <div className="max-w-3xl mx-auto px-4 md:px-12 py-4 text-gray-700 dark:text-gray-300 text-sm text-center">
                © {currentYear} John Paul Allam. All rights reserved.
            </div>
        </footer>
    );
}
