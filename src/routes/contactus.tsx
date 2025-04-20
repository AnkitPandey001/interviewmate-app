import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Mail, User, MessageCircleHeart } from "lucide-react";
import { useState } from "react";
import { db } from "@/config/firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const ContactUs = () => {
  const [name, setName] = useState<string>("");  
  const [email, setEmail] = useState<string>(""); 
  const [topic, setTopic] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message || !topic || !rating) {
      alert("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "feedbackfromuser"), {
        name,
        email,
        topic,
        message,
        rating,
        createdAt: serverTimestamp(),
      });

      alert("Feedback submitted successfully!");
      setName("");
      setEmail("");
      setTopic("");
      setMessage("");
      setRating("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">We’d love to hear from you!</h1>
        <p className="text-muted-foreground text-lg">
          Whether it’s feedback, suggestions, or a quick hello — drop us a
          message!
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Name input */}
          <div>
            <Label htmlFor="name" className="text-lg font-semibold">
              <User className="inline w-5 h-5 mr-2" /> Your Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="mt-2"
            />
          </div>

          {/* Email input */}
          <div>
            <Label htmlFor="email" className="text-lg font-semibold">
              <Mail className="inline w-5 h-5 mr-2" /> Your Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2"
            />
          </div>

          {/* Topic select */}
          <div>
            <Label htmlFor="topic" className="text-lg font-semibold">
              <MessageCircleHeart className="inline w-5 h-5 mr-2" /> Message
              Topic
            </Label>
            <Select value={topic} onValueChange={setTopic}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="bug">Report a Bug</SelectItem>
                <SelectItem value="suggestion">Feature Suggestion</SelectItem>
                <SelectItem value="general">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message textarea */}
          <div>
            <Label htmlFor="message" className="text-lg font-semibold">
              Your Message
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="mt-2"
            />
          </div>

          {/* Rating select */}
          <div>
            <Label htmlFor="rating" className="text-lg font-semibold">
              <Star className="inline w-5 h-5 mr-2 text-yellow-500" /> How was
              your experience?
            </Label>
            <Select value={rating} onValueChange={setRating}>
              <SelectTrigger>
                <SelectValue placeholder="Rate your experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="excellent">🌟 Excellent</SelectItem>
                <SelectItem value="good">😊 Good</SelectItem>
                <SelectItem value="average">😐 Average</SelectItem>
                <SelectItem value="bad">😕 Bad</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Submit button */}
        <Button
          className="w-full mt-8 cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300"
          type="submit"
          variant="ghost"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
    </div>
  );
};
