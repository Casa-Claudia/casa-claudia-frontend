import Footer from './components/footer';
import Topbar from './components/topbar';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Topbar />
      {children}
      <Footer />
    </>
  );
}
