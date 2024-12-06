// Define a class to manage student information
class Student {
    constructor(name, dateOfBirth, contactInfo, academicDetails, adminDetails) {
      // Personal Information
      this.name = name;
      this.dateOfBirth = dateOfBirth;
      this.contactInfo = contactInfo;
  
      // Academic Information
      this.academicDetails = academicDetails; // { major, courses, grades, attendance }
  
      // Administrative Information
      this.adminDetails = adminDetails; // { studentID, scholarshipStatus, feePaid }
    }
  
    // Method to display the student details
    displayDetails() {
      console.log("Student Details:");
      console.log("Name:", this.name);
      console.log("Date of Birth:", this.dateOfBirth);
      console.log("Contact Info:", this.contactInfo);
      console.log("Academic Details:", this.academicDetails);
      console.log("Administrative Details:", this.adminDetails);
    }
  
    // Method to update academic details
    updateAcademicDetails(newCourses, newGrades, newAttendance) {
      this.academicDetails.courses = newCourses;
      this.academicDetails.grades = newGrades;
      this.academicDetails.attendance = newAttendance;
    }
  
    // Method to update administrative details (e.g., fee status)
    updateAdminDetails(newStudentID, newScholarshipStatus, newFeePaidStatus) {
      this.adminDetails.studentID = newStudentID;
      this.adminDetails.scholarshipStatus = newScholarshipStatus;
      this.adminDetails.feePaid = newFeePaidStatus;
    }
  
    // Method to delete all student information after graduation
    graduate() {
      console.log(`Graduating student: ${this.name}`);
      this.name = null;
      this.dateOfBirth = null;
      this.contactInfo = null;
      this.academicDetails = null;
      this.adminDetails = null;
      console.log("All student information has been deleted.");
    }
  }
  
  // Example usage
  
  // Creating a new student object
  const student1 = new Student(
    "Yashaswini",
    "2005-02-04",
    { phone: "9353618171", email: "yashaswir194@gmail.com" },
    { major: "Artificial Intelligence and Data Science", courses: ["BCS501", "BCS502"], grades: ["A", "B"], attendance: [95, 100] },
    { studentID: "1DB22AD062", scholarshipStatus: "Yes", feePaid: "Yes" }
  );
  
  // Displaying student details
  student1.displayDetails();
  
  // Updating academic details
  student1.updateAcademicDetails(
    ["BCS501", "BCS502", "BCS201"], 
    ["A", "B", "A"], 
    [95, 88, 92]
  );
  
  // Updating administrative details
  student1.updateAdminDetails("S12345", "Yes", "Yes");
  
  // Displaying updated student details
  student1.displayDetails();
  
  // Graduation - deleting student information
  student1.graduate();
  
  // Trying to display information after graduation (should show null)
  student1.displayDetails();
  