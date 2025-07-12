import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export function NewsletterSection() {
  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[40vh] rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="news letter image"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Subscribe to our newsletter for exclusive deals on household
                products.
              </h2>
            </div>

            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 rounded-full border-gray-300"
              />
              <Button variant="default" size="default">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
