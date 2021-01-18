import React, { useState } from "react";
import DesktopTopbar from "./DesktopTopbar";
import MobileTopbar from "./MobileTopbar";
import OpeningButton from "./OpeningButton";
import UserAvatarWithMenu from "./UserAvatarWithMenu";
import LinkButton from "./LinkButton";
import Searchbar from "./SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header class="pb-24 bg-gradient-to-r from-light-blue-800 to-cyan-600">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="relative flex flex-wrap items-center justify-center lg:justify-between">
          <div class="text-2xl font-medium text-cyan-200 absolute left-0 py-5 flex-shrink-0 lg:static">
            Got Lah!
          </div>
          <div>
            <div class="hidden lg:block lg:col-span-2">
              <nav class="flex space-x-4">
                <LinkButton link="/orders" text="Orders" black={false} />
                <LinkButton link="/orders" text="Menu" black={false} />
              </nav>

              <div class="px-12 lg:px-0">
                <Searchbar />
              </div>

              {/* User Menu Avatar */}
              <UserAvatarWithMenu />
            </div>
          </div>

          {/* User Menu Large */}
          <DesktopTopbar />

          {/* Opening Button */}
          <OpeningButton handleClick={setIsOpen} />
        </div>
      </div>

      {/* Black Screen when nav bar is open */}
      {isOpen && (
        <div
          class="z-20 fixed inset-0 bg-black bg-opacity-25 lg:hidden"
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile-Menu Div */}
      <MobileTopbar isOpen={isOpen} toggleOpen={setIsOpen} />
    </header>
  );
};

export default Header;
