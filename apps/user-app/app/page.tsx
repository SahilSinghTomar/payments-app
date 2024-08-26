import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="underline">Hello, World!</h1>
      <Button appName="user-app">Click me</Button>
    </div>
  );
}
