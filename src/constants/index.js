import {
    blog01,
    blog02,
    blog03,
    blog04,
    course01,
    course02,
    course03,
    course04,
    course05,
    course06,
    course07,
    course08,
    course09,
    course10,
    course11,
    course12,
    course13,
    instructor01,
    instructor02,
    instructor03,
    instructor04,
    instructor05,
    instructor06,
    instructor07,
    instructor08,
    instructor09,
    instructor10,
    instructor11,
    instructor12,
    instructor13,
} from "./images";

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "popular",
        title: "Popular",
    },
    {
        id: "instructors",
        title: "Instructors",
    },
    {
        id: "blog",
        title: "Blog",
    },
];

export const statistics = [
    {
        number: "7+",
        text: "Years Experience",
    },
    {
        number: "700K",
        text: "Students",
    },
    {
        number: "1K+",
        text: "Instructor",
    },
    {
        number: "150+",
        text: "Courses",
    },
];

export const aboutFeaturs = [
    {
        title: "Our Vision",
        description: "We aspire to empower individuals from all walks of life to achieve their learning goals.",
    },
    {
        title: "Expert Instructors",
        description: "Our courses are led by industry experts and seasoned educators.",
    },
    {
        title: "Diverse Course Catalog",
        description: "We offer a diverse range of courses spanning various fields, from technology and business to the arts and beyond.",
    },
    {
        title: "Community Engagement",
        description: "Join our thriving learning community, connect with fellow students and instructors.",
    },
];

export const categories = ["All", "Technology", "Marketing", "Arts", "Business"];

export const courses = [
    {
        id: 1,
        title: "Introduction to Web Development",
        category: "Technology",
        difficulty: "Beginner",
        thumbnail: course01,
        instructor: {
            name: "Sarah Johnson",
            pic: instructor01,
        },
        rating: 4.7,
    },
    {
        id: 2,
        title: "Data Science Fundamentals",
        category: "Technology",
        difficulty: "Intermediate",
        thumbnail: course02,
        instructor: {
            name: "Michael Chen",
            pic: instructor02,
        },
        rating: 4.9,
    },
    {
        id: 3,
        title: "Digital Marketing Mastery",
        category: "Marketing",
        difficulty: "Advanced",
        thumbnail: course03,
        instructor: {
            name: "Emily Davis",
            pic: instructor03,
        },
        rating: 4.8,
    },
    {
        id: 4,
        title: "Art of Photography",
        category: "Arts",
        difficulty: "Beginner",
        thumbnail: course04,
        instructor: {
            name: "James Anderson",
            pic: instructor04,
        },
        rating: 4.6,
    },
    {
        id: 5,
        title: "Entrepreneurship Bootcamp",
        category: "Business",
        difficulty: "Intermediate",
        thumbnail: course05,
        instructor: {
            name: "Mark Roberts",
            pic: instructor05,
        },
        rating: 4.7,
    },
    {
        id: 6,
        title: "Content Marketing Strategy",
        category: "Marketing",
        difficulty: "Intermediate",
        thumbnail: course06,
        instructor: {
            name: "Laura Williams",
            pic: instructor06,
        },
        rating: 4.8,
    },
    {
        id: 7,
        title: "Machine Learning for Beginners",
        category: "Technology",
        difficulty: "Beginner",
        thumbnail: course07,
        instructor: {
            name: "Maria Rodriguez",
            pic: instructor07,
        },
        rating: 4.9,
    },
    {
        id: 8,
        title: "Social Media Advertising Mastery",
        category: "Marketing",
        difficulty: "Advanced",
        thumbnail: course08,
        instructor: {
            name: "Thomas Lee",
            pic: instructor08,
        },
        rating: 4.6,
    },
    {
        id: 9,
        title: "Python Programming Essentials",
        category: "Technology",
        difficulty: "Intermediate",
        thumbnail: course09,
        instructor: {
            name: "John Smith",
            pic: instructor09,
        },
        rating: 4.8,
    },
    {
        id: 10,
        title: "Social Media Marketing Strategies",
        category: "Marketing",
        difficulty: "Advanced",
        thumbnail: course10,
        instructor: {
            name: "Laura Davis",
            pic: instructor10,
        },
        rating: 4.9,
    },
    {
        id: 11,
        title: "Acrylic Painting Techniques",
        category: "Arts",
        difficulty: "Beginner",
        thumbnail: course11,
        instructor: {
            name: "Rachel White",
            pic: instructor11,
        },
        rating: 4.6,
    },
    {
        id: 12,
        title: "Small Business Management",
        category: "Business",
        difficulty: "Intermediate",
        thumbnail: course12,
        instructor: {
            name: "Mike Johnson",
            pic: instructor12,
        },
        rating: 4.6,
    },
    {
        id: 13,
        title: "Cybersecurity Fundamentals",
        category: "Technology",
        difficulty: "Intermediate",
        thumbnail: course13,
        instructor: {
            name: "Alex Turner",
            pic: instructor13,
        },
        rating: 4.7,
    },
];

export const instructors = [
    {
        id: 1,
        name: "Sarah Johnson",
        specialty: "Software Engineer",
        pic: instructor01,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Michael Chen",
        specialty: "Data Scientist",
        pic: instructor02,
        rating: 4.7,
    },
    {
        id: 3,
        name: "Emily Davis",
        specialty: "Digital Marketing Manager",
        pic: instructor03,
        rating: 4.6,
    },
    {
        id: 4,
        name: "James Anderson",
        specialty: "Photographer",
        pic: instructor04,
        rating: 4.9,
    },
    {
        id: 5,
        name: "Mark Roberts",
        specialty: "Business Manager",
        pic: instructor05,
        rating: 4.8,
    },
    {
        id: 6,
        name: "Laura Williams",
        specialty: "Digital Marketing Manager",
        pic: instructor06,
        rating: 4.9,
    },
    {
        id: 7,
        name: "Maria Rodriguez",
        specialty: "Data Scientist",
        pic: instructor07,
        rating: 4.7,
    },
    {
        id: 8,
        name: "Thomas Lee",
        specialty: "Digital Marketing",
        pic: instructor08,
        rating: 4.6,
    },
    {
        id: 9,
        name: "John Smith",
        specialty: "Software Engineer",
        pic: instructor09,
        rating: 4.5,
    },
    {
        id: 10,
        name: "Laura Davis",
        specialty: "Digital Marketing",
        pic: instructor10,
        rating: 4.9,
    },
    {
        id: 11,
        name: "Rachel White",
        specialty: "Artist",
        pic: instructor11,
        rating: 4.7,
    },
    {
        id: 12,
        name: "Mike Johnson",
        specialty: "Business Manager",
        pic: instructor12,
        rating: 4.6,
    },
    {
        id: 13,
        name: "Alex Turner",
        specialty: "Cybersecurity",
        pic: instructor13,
        rating: 4.8,
    },
];

export const blogs = [
    {
        id: 1,
        title: "Mastering Time Management",
        description: "Unlock productivity with time management techniques.",
        thumbnail: blog01,
    },
    {
        id: 2,
        title: "The Power of Data: Insights for Business Success",
        description: "Learn how to harness the power of data analytics, interpret trends.",
        thumbnail: blog02,
    },
    {
        id: 3,
        title: "Unlocking Your Creative Potential",
        description: "Discover the techniques, tips, and inspiration you need to unleash your inner creativity.",
        thumbnail: blog03,
    },
    {
        id: 4,
        title: "The Future of Work: Navigating Remote Collaboration",
        description: "Explore the latest trends and tools shaping remote collaboration.",
        thumbnail: blog04,
    },
];
