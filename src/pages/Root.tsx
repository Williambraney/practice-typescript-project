import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import HeaderLink from '../components/HeaderLink';
import Button from '../components/Button';

export default function Root() {
  return (
    <>
      <Header>
        <HeaderLink
          href="/"
        >
          Our mission
        </HeaderLink>
        <HeaderLink
          href="/sessions"
        >
          Browse sessions
        </HeaderLink>
        <Button
          onClick={() => alert('You clicked the button!')}
        >
          Upcoming sessions
        </Button>
      </Header>
      <Outlet />
    </>
  );
}
