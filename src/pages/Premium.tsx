
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export default function Premium() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Upgrade to Premium</h1>
        <p className="text-xl text-muted-foreground">Take your learning journey to the next level</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-2">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Free Plan</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="pt-4 pb-8">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Basic roadmap access</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Limited video tutorials</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Task tracking</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Community discussions</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <span className="text-muted-foreground">Exclusive videos & content</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <span className="text-muted-foreground">Advanced portfolio templates</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <span className="text-muted-foreground">One-on-one mentorship</span>
              </li>
              <li className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <span className="text-muted-foreground">Ad-free experience</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Current Plan</Button>
          </CardFooter>
        </Card>
        
        <Card className="border-2 border-brand-purple shadow-lg relative">
          <Badge className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/2 bg-brand-orange text-white">
            Most Popular
          </Badge>
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Premium Plan</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold">$15</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="pt-4 pb-8">
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Complete roadmap access</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Full library of video tutorials</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Advanced task tracking and analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Priority community support</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Exclusive premium videos & content</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>10+ Professional portfolio templates</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>Monthly one-on-one mentorship sessions</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span>100% Ad-free experience</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-brand-purple hover:bg-brand-purple/90">Upgrade Now</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Premium Features in Detail</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 mb-4 mx-auto">
                <svg className="h-6 w-6 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.7273 14.7273C18.6063 15.0279 18.5702 15.3589 18.6236 15.6819C18.6771 16.0049 18.8177 16.3071 19.0273 16.5545L19.0818 16.6091C19.2509 16.778 19.385 16.9797 19.4764 17.2024C19.5679 17.4251 19.6151 17.6644 19.6151 17.9063C19.6151 18.1483 19.5679 18.3876 19.4764 18.6103C19.385 18.833 19.2509 19.0347 19.0818 19.2036C18.9129 19.3727 18.7112 19.5068 18.4885 19.5982C18.2658 19.6897 18.0265 19.7369 17.7845 19.7369C17.5425 19.7369 17.3033 19.6897 17.0806 19.5982C16.8579 19.5068 16.6562 19.3727 16.4873 19.2036L16.4327 19.1491C16.1853 18.9395 15.8831 18.7989 15.5601 18.7454C15.2371 18.692 14.9061 18.7281 14.6055 18.8491C14.3119 18.9634 14.0586 19.1621 13.8736 19.4179C13.6885 19.6737 13.5789 19.9755 13.5582 20.2891L13.5455 20.4C13.5455 20.8891 13.3602 21.3582 13.0306 21.6877C12.7011 22.0173 12.232 22.2026 11.7429 22.2026C11.2539 22.2026 10.7848 22.0173 10.4552 21.6877C10.1257 21.3582 9.94036 20.8891 9.94036 20.4L9.93409 20.3236C9.90991 20.0042 9.79496 19.6983 9.60281 19.4414C9.41066 19.1846 9.15009 18.9885 8.85091 18.8818C8.55023 18.7609 8.21929 18.7248 7.89625 18.7782C7.5732 18.8317 7.27107 18.9723 7.02364 19.1818L6.96909 19.2364C6.80018 19.4054 6.5985 19.5396 6.3758 19.631C6.1531 19.7225 5.91385 19.7697 5.67185 19.7697C5.42985 19.7697 5.1906 19.7225 4.9679 19.631C4.7452 19.5396 4.54353 19.4054 4.37461 19.2364C4.20555 19.0674 4.07142 18.8658 3.97996 18.6431C3.8885 18.4204 3.84128 18.1811 3.84128 17.9391C3.84128 17.6971 3.8885 17.4578 3.97996 17.2351C4.07142 17.0124 4.20555 16.8108 4.37461 16.6418L4.42915 16.5873C4.63876 16.3398 4.77934 16.0377 4.83279 15.7147C4.88624 15.3916 4.85017 15.0607 4.72909 14.76C4.61478 14.4664 4.41611 14.2131 4.16028 14.0281C3.90446 13.843 3.60274 13.7334 3.28909 13.7127L3.17819 13.7C2.68909 13.7 2.22 13.5146 1.89045 13.1851C1.56091 12.8556 1.37552 12.3864 1.37552 11.8974C1.37552 11.4083 1.56091 10.9392 1.89045 10.6097C2.22 10.2801 2.68909 10.0947 3.17819 10.0947L3.25455 10.0884C3.57392 10.0643 3.87978 9.94929 4.13668 9.75714C4.39358 9.56499 4.58963 9.30442 4.69637 9.00524C4.81746 8.70456 4.85352 8.37362 4.80007 8.05058C4.74663 7.72753 4.60604 7.4254 4.39637 7.17796L4.34182 7.12342C4.17277 6.9545 4.03863 6.75283 3.94717 6.53013C3.85571 6.30743 3.80849 6.06818 3.80849 5.82618C3.80849 5.58418 3.85571 5.34493 3.94717 5.12223C4.03863 4.89953 4.17277 4.69785 4.34182 4.52894C4.51074 4.35988 4.71242 4.22574 4.93512 4.13428C5.15782 4.04282 5.39707 3.9956 5.63907 3.9956C5.88107 3.9956 6.12032 4.04282 6.34302 4.13428C6.56572 4.22574 6.7674 4.35988 6.93632 4.52894L6.99087 4.58348C7.2383 4.79309 7.54043 4.93367 7.86348 4.98712C8.18652 5.04057 8.51746 5.0045 8.81818 4.88342H8.86909C9.1627 4.76911 9.41596 4.57043 9.60103 4.31461C9.7861 4.05879 9.89571 3.75707 9.91637 3.44342L9.92909 3.33251C9.92909 2.84342 10.1145 2.37433 10.444 2.04478C10.7736 1.71524 11.2427 1.52985 11.7318 1.52985C12.2209 1.52985 12.69 1.71524 13.0195 2.04478C13.349 2.37433 13.5344 2.84342 13.5344 3.33251L13.5407 3.40887C13.5614 3.72251 13.6709 4.02424 13.856 4.28006C14.0411 4.53588 14.2943 4.73456 14.588 4.84887C14.8887 4.96996 15.2196 5.00603 15.5426 4.95258C15.8657 4.89913 16.1678 4.75855 16.4153 4.54887L16.4698 4.49433C16.6387 4.32527 16.8404 4.19114 17.0631 4.09968C17.2858 4.00822 17.5251 3.961 17.7671 3.961C18.0091 3.961 18.2483 4.00822 18.471 4.09968C18.6937 4.19114 18.8954 4.32527 19.0643 4.49433C19.2334 4.66324 19.3675 4.86492 19.459 5.08762C19.5504 5.31032 19.5976 5.54957 19.5976 5.79157C19.5976 6.03357 19.5504 6.27282 19.459 6.49552C19.3675 6.71822 19.2334 6.9199 19.0643 7.08882L19.0098 7.14337C18.8002 7.3908 18.6596 7.69293 18.6061 8.01598C18.5527 8.33902 18.5888 8.66996 18.7098 8.97064V9.02155C18.8242 9.31516 19.0228 9.56842 19.2787 9.75349C19.5345 9.93856 19.8362 10.0482 20.1498 10.0688L20.2607 10.0815C20.7498 10.0815 21.2189 10.2669 21.5485 10.5965C21.878 10.926 22.0634 11.3951 22.0634 11.8842C22.0634 12.3733 21.878 12.8424 21.5485 13.1719C21.2189 13.5015 20.7498 13.6869 20.2607 13.6869H20.1844C19.8707 13.7075 19.569 13.8171 19.3132 14.0022C19.0574 14.1872 18.8587 14.4405 18.7444 14.7342L18.7273 14.7273Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-center mb-2">Advanced Learning Tools</h3>
              <p className="text-sm text-muted-foreground text-center">
                Get personalized learning recommendations and AI-powered summaries of complex topics.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 mb-4 mx-auto">
                <svg className="h-6 w-6 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-center mb-2">Professional Mentorship</h3>
              <p className="text-sm text-muted-foreground text-center">
                Regular one-on-one sessions with industry professionals to guide your learning journey.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple/10 mb-4 mx-auto">
                <svg className="h-6 w-6 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 7H7V17H9V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 7H15V13H17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-center mb-2">Premium Content</h3>
              <p className="text-sm text-muted-foreground text-center">
                Exclusive access to in-depth tutorials, project walkthroughs, and advanced code implementations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-16 bg-muted rounded-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Can I cancel my premium subscription anytime?</h3>
            <p className="text-sm text-muted-foreground mt-1">Yes, you can cancel your subscription at any time. You'll continue to have premium access until the end of your billing cycle.</p>
          </div>
          
          <div>
            <h3 className="font-medium">How do the mentorship sessions work?</h3>
            <p className="text-sm text-muted-foreground mt-1">Premium members get one 30-minute one-on-one video call with an expert mentor each month. You can book your session through the dashboard.</p>
          </div>
          
          <div>
            <h3 className="font-medium">Is there a student discount available?</h3>
            <p className="text-sm text-muted-foreground mt-1">Yes, we offer a 40% discount for students. Contact our support team with your valid student ID to get your discount code.</p>
          </div>
          
          <div>
            <h3 className="font-medium">What payment methods do you accept?</h3>
            <p className="text-sm text-muted-foreground mt-1">We accept all major credit cards and PayPal. All payments are securely processed.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
