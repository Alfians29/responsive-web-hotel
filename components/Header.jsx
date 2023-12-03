import Link from 'next/link';
import { Button } from './ui/button';
import MobileNav from './MobileNav';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='absolute w-full max-w-[1440px] py-8 xl:py-10'>
      <div className='container mx-auto'>
        {/* logo, nav (desktop), btn */}
        <div className='flex items-center justify-between'>
          {/* logo */}
          <Link href=''>
            <h1 className='text-2xl font-bold text-white'>CheckIn</h1>
          </Link>
          {/* nav & btn */}
          <div className='hidden xl:flex'>
            <div className='flex items-center gap-x-12'>
              <Nav
                containerStyles='flex items-center justify-between'
                listStyles='flex gap-x-12 text-white'
              />
              <Button variant='outline' className='px-10 h-[58px]'>
                Login
              </Button>
            </div>
          </div>
        </div>
        {/* mobile nav */}
        <div className='xl:hidden absolute right-8 top-8'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
