import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

interface ApplicationDialogProps {
  children: React.ReactNode;
}

const ApplicationDialog = ({ children }: ApplicationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Start Your Learning Journey</DialogTitle>
          <DialogDescription>
            Follow these steps to begin your learning journey with us.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-start gap-2">
            <div className="mt-0.5 bg-green-100 rounded-full p-1">
              <Check className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium">1. Participate in Challenge</h4>
              <p className="text-sm text-muted-foreground">
                Complete a small project to demonstrate your motivation and basic skills.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="mt-0.5 bg-green-100 rounded-full p-1">
              <Check className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium">2. Fill Application</h4>
              <p className="text-sm text-muted-foreground">
                Tell us about yourself and your learning goals.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div className="mt-0.5 bg-green-100 rounded-full p-1">
              <Check className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium">3. Choose Your Contribution</h4>
              <p className="text-sm text-muted-foreground">
                Select a monthly donation that matches your goals:
              </p>
              <div className="mt-2 space-y-2">
                <div className="rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">€10/month</span>
                    <span className="text-sm text-muted-foreground">Basic</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Access to all learning materials and group sessions</p>
                </div>
                <div className="rounded-lg border p-3 bg-accent/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">€25/month</span>
                      <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded">Popular</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Enhanced</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Basic benefits + priority code reviews and monthly 1-on-1 mentoring session
                  </p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">€100/month</span>
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">Premium</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Enhanced benefits + weekly 1-on-1 mentoring, career guidance, and job referrals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Start Challenge</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDialog;