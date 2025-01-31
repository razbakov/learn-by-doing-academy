import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
                Select a monthly donation amount that works for you (€10, €25, €100, etc.).
              </p>
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