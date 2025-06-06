
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboard, BookOpen, ClipboardList, Percent, ExternalLink, CalendarDays, CheckCircle, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock Data
const upcomingAssignments = [
  { id: 1, name: "Algebra Homework 5.2", course: "Mathematics Grade 9", dueDate: "2024-09-15", status: "Pending" },
  { id: 2, name: "Lab Report: Photosynthesis", course: "Biology 101", dueDate: "2024-09-18", status: "Pending" },
  { id: 3, name: "Essay: The Great Gatsby", course: "World Literature", dueDate: "2024-09-22", status: "Submitted" },
];

const recentGrades = [
  { id: 1, course: "Mathematics Grade 9", assignment: "Quiz 3", grade: "88%", date: "2024-09-05" },
  { id: 2, course: "Physics for Innovators", assignment: "Midterm Exam", grade: "92%", date: "2024-09-02" },
  { id: 3, course: "World Literature", assignment: "Short Story Analysis", grade: "A-", date: "2024-08-28" },
];

const studentAnnouncements = [
    { id: 1, title: "School Photo Day Next Week!", date: "2024-09-10", content: "Don't forget, school photo day is scheduled for Tuesday next week. Wear your best smile!"},
    { id: 2, title: "Library System Maintenance", date: "2024-09-08", content: "The online library portal will be down for maintenance this Saturday from 9 AM to 1 PM."},
];

export default function StudentDashboardPage() {
  const studentName = "Alex Johnson"; // Replace with dynamic data later

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <LayoutDashboard className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold font-headline text-primary">Student Dashboard</h1>
        </div>
        <p className="text-xl text-foreground/70">Welcome back, {studentName}!</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-accent">
                <ClipboardList className="mr-3 h-6 w-6" /> Upcoming Assignments
              </CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingAssignments.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Assignment</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingAssignments.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.course}</TableCell>
                        <TableCell>{item.dueDate}</TableCell>
                        <TableCell>
                           <span className={`px-2 py-1 text-xs rounded-full ${item.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
                            {item.status}
                           </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p className="text-foreground/70">No upcoming assignments. Great job staying on top of your work!</p>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-accent">
                <Percent className="mr-3 h-6 w-6" /> Recent Grades
              </CardTitle>
            </CardHeader>
            <CardContent>
               {recentGrades.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course</TableHead>
                      <TableHead>Assignment</TableHead>
                      <TableHead>Grade</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentGrades.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.course}</TableCell>
                        <TableCell>{item.assignment}</TableCell>
                        <TableCell className="font-semibold text-primary">{item.grade}</TableCell>
                        <TableCell>{item.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                 <p className="text-foreground/70">No recent grades to display.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <BookOpen className="mr-2 h-5 w-5" /> My Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">Quickly access your enrolled courses.</p>
              <Button asChild className="w-full">
                <Link href="/courses">
                  View All Courses <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <CalendarDays className="mr-2 h-5 w-5" /> Announcements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentAnnouncements.length > 0 ? (
                studentAnnouncements.map(announcement => (
                  <div key={announcement.id} className="p-3 bg-muted/50 rounded-md">
                    <h4 className="font-semibold text-foreground/90">{announcement.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{announcement.date}</p>
                    <p className="text-sm text-foreground/80">{announcement.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-foreground/70">No new announcements.</p>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl text-primary">
                <ExternalLink className="mr-2 h-5 w-5" /> Quick Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/student/profile">My Profile</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/student/timetable">View Timetable</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/resources/library">Library Resources</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
