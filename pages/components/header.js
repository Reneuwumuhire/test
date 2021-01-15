import { useHistory } from 'react-router';
import Link from 'next/link';

const Header = () => {
    const history = useHistory();
    return (
        <div className="flex pa1 justify-between nowrap orange">
            <div className="flex flex-fixed black">
                <div className="fw7 mr1">Hacker News</div>
                <Link href="/" className="ml1 no-underline black">
                    new
        </Link>
                <div className="ml1">|</div>
                <Link
                    href="/components/createLink"
                    className="ml1 no-underline black"
                >
                    submit
        </Link>
            </div>
        </div>
    );
};

export default Header;