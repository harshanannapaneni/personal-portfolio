import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import path from "path";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // In a real application, you would send an email here
      // For now, we'll just log the contact form submission
      console.log("Contact form submission:", validatedData);
      
      res.json({ 
        message: "Thank you for your message! I will get back to you soon.",
        success: true 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  });

  // Serve resume PDF
  app.get("/resume.pdf", (req, res) => {
    const resumePath = path.join(process.cwd(), "public", "resume.pdf");
    res.download(resumePath, "Harsha_Nannapaneni_Resume.pdf", (err) => {
      if (err) {
        res.status(404).json({ message: "Resume not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
