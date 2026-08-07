import type { Metadata } from "next";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Property",
  description: "Enterprise Property Management Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "15px",
              padding: "20px",
            }}
          >
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}