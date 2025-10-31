import Image from 'next/image';
import Link from 'next/link';

const Logo = (props: { sticky: boolean }) => {
    const { sticky } = props;
    return (
        <Link href="/">
            <Image
                src={sticky ? "/images/logo/sticky_logo.png" : "/images/logo/WhiteLogo.png"}
                alt="logo"
                width={120}
                height={0}
                // style={{ width: 'auto', height: 'auto' }}
                quality={100}
                priority={true}
                className='hidden xsm:block'
            />
            <Image src={sticky ? "/images/logo/favicon.png" : "/images/logo/favicon.png"} alt='logo' width={40} height={40} className='block xsm:hidden' />
        </Link>
    );
};

export default Logo;
