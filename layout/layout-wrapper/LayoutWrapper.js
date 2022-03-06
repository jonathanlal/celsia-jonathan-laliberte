import { DesktopHeader, MobileHeader } from 'layout';
import { Media, MediaContextProvider } from 'styles';

export function LayoutWrapper() {
  return (
    <MediaContextProvider>
      <Media at="mobile">
        <MobileHeader />
      </Media>
      <Media greaterThan="mobile">
        <DesktopHeader />
      </Media>
    </MediaContextProvider>
  );
}
