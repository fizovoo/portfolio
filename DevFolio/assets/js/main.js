/*
Name: Fayz Reshid
Due Date: March 12,2023
Section: CST 8285 Sec 313
Lab: Assignment 1
File: style.css
Lab objective: Building a peronal portfolio.
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Intro type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }


 


  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

let courses = [
  {
    title: 'Introduction to Computer Programming',
    level: 'Level 1',
    code: 'CST8116',
    description: 'This course is an introductory level computer programming course that covers the fundamentals of logic, problem-solving, and programming language structure. The course focuses on problem analysis and design, using algorithms, pseudocode, flowcharts, and UML Class Diagrams, with Java programming language used for implementation. Students learn about sequential structures, selection structures, repetition structures, variables, constants, methods, constructors, one-dimensional arrays, object-oriented programming, classes, objects, abstraction, encapsulation, inputs, outputs, coding conventions, and documentation. The course includes practical laboratory assessments to reinforce theory with application. The course is part of a part-time on-campus and/or online Computer Programming program.',
    image: 'assets/img/ComputerProgramming.jpg',
    alt: 'a man sitting behind a computer and programming'
  },

  {
    title: 'Introduction to Database',
    level: 'Level 1',
    code: 'CST8215',
    description: 'This course is focused on teaching students the fundamentals of relational databases design using Entity Relation Diagrams (ERDs) and Structured Query Language (SQL). Students learn how to create, modify and query databases, as well as how to design and create databases that are secure, adaptable and maintainable, using normalization. The course also covers the functions of a Database Management System (DBMS) and its components, in comparison to legacy systems and alternative information storage mechanisms. This course is part of a part-time on-campus and/or online Computer Programming program.',
    image: 'assets/img/Intro Database.jpg',
    alt: 'a detailed close up of a chip'
  },
  {
    title: 'Database Systems',
    level: 'Level 2',
    code: 'CST2355',
    description: "This course is part of a part-time on-campus and/or online Computer Programming program that teaches students how to use object-relational database management systems like Oracle and MySQL. Students gain practical experience in using advanced engineering modeling tools, SQL, SQL scripts, and programming with Oracle's PL/SQL blocks. The course covers advanced database concepts such as case structures, rollup and cube operations, metadata manipulation, data storage and retrieval, security, transaction control, and data warehousing. By the end of the course, students acquire skills in automating data processing tasks and tying them into the security of information technology systems.",
    image: 'assets/img/Database Systems.jpg',
    alt: ' a futuristic storage room'
  },
  {
    title: 'Operating Systems Fundamentals (GNU/Linux)',
    level: 'Level 2',
    code: 'CST8102',
    description: 'This course is part of a part-time on-campus and/or online Computer Programming program that covers the basic concepts and components of Operating Systems (OS) and their interaction with hardware and software components. The course explores operating system structures, process management, storage management, installation, configuration, and administration in both theory and practical assignments using the GNU/Linux operating system. Students gain hands-on experience and develop skills in using GNU/Linux command-line tools and utilities through lab work. By the end of the course, students should have a solid understanding of how operating systems function and their role in coordinating the interaction between hardware and software.',
    image: 'assets/img/linux.png',
    alt: "a penguin representing linux's logo"
  },
  {
    title: 'Object Oriented Programming',
    level: 'Level 2',
    code: 'CST8284',
    description: 'This course is part of a part-time on-campus and/or online Computer Programming program that teaches students Object-Oriented Programming (OOP) concepts using the Java programming language. Students learn and explore object-oriented concepts, such as encapsulation, inheritance, abstraction, and polymorphism. The course reinforces these concepts with practical applications and also covers the basics of data structures and algorithms as well as basic Graphical User Interface (GUI) programming. By the end of the course, students should have a firm understanding of OOP concepts and be able to apply them to develop software solutions.',
    image: 'assets/img/Object oriented programming.jpg',
    alt: 'a picture representing a laptop on a desk that is running a program'
  },

  {
    title: 'Computer essentials',
    level: 'Level 1',
    code: 'CST8101',
    description: 'This course is part of a part-time on-campus and/or online Computer Programming program that covers the essentials of computer software, hardware, and laptop management. Students learn to configure their laptop environment, basic PC troubleshooting, creating backups, installing virus protection, and managing files using the Windows Operating System. The course also covers installing and configuring the Windows Operating System and a virtual machine environment, and explores computer organization, including basic numerical systems, functional hardware, and software components needed to run programs. By the end of the course, students should have a solid understanding of computer software, hardware, and laptop management, which form the foundation for building further technical programming skills.',
    image: 'assets/img/ComputerEssentials.jpg',
    alt: 'a picture of a laptop that is projecting 3-D holographs'
  },

  {
    title: 'Web Programming',
    level: 'Level 2',
    code: 'CST8285',
    description: 'This course is part of a part-time on-campus and/or online Computer Programming program that focuses on developing basic skills of web programming, website design, and implementation. Students learn to use JavaScript, HTML5, and PHP to explore web-based solutions for problems of increasing interactivity and complexity. The course also covers website maintenance, and lectures are reinforced by practical assignments that encourage students to construct and maintain their own websites. By the end of the course, students should have a solid understanding of web programming and website design, and be able to implement their own web-based solutions.',
    image: 'assets/img/web_programming_basics.jpg',
    alt: 'a close up of a function of a programming language'
  },

  {
    title: 'Communications 1',
    level: 'Level 1',
    code: 'ENL1813T',
    description: "This course focuses on enhancing students' communication skills to become effective business communicators. Through a practical, vocation-oriented approach, the course aims to develop stronger grammar and business writing skills, along with speaking, reading, listening, and information documentation skills. The course also emphasizes the use of technology in professional communication. Through a combination of lectures, exercises, and independent learning, students learn to communicate professionally, which contributes to success in both educational and workplace environments.",
    image: 'assets/img/Communications 1.jpg',
    alt: 'many people that are represented as figures thinking and interacting to one another'
  },

  {
    title: 'Technical Mathematics for Computer Science',
    level: 'Level 1',
    code: 'MAT8001C',
    description: 'MAT8001C is a course that serves as a prerequisite to Calculus, focusing on the study of algebraic and transcendental functions. Students learn to manipulate algebraic expressions, solve equations and linear systems, and graph functions. The course also covers computer number systems, Boolean algebra and logic, and vector addition and subtraction. It is delivered in a modular format and is equivalent to completing several math modules.',
    image: 'assets/img/Tech math.jpg',
    alt: 'a man working on a programming problem on his laptop with the help of some math'
  },

  {
    title: 'Achieving Success in Changing Environments',
    level: 'Level 1',
    code: 'CST8300',
    description: 'This course focuses on exploring the possibilities, opportunities, potential hazards, and ethical problems of the emerging society in the 21st century. Students will assess their strengths and apply critical thinking and decision-making tools to resolve important issues and make responsible choices as contributing citizens.',
    image: 'assets/img/Achieving success.jpg',
    alt: 'a group of human cartoons climbing and supporting each other indicating success'
  },

  {
    title: 'Technical Communication for Engineering technology',
    level: 'Level 2',
    code: 'ENL2019T',
    description: 'The course emphasizes on developing effective communication skills that are required in a technical interdisciplinary workplace. Students will learn critical thinking, research, writing, visual communication, and presentation skills through exercises and assignments.',
    image: 'assets/img/Technical communication.jpg',
    alt: 'two animated men popping out of two monitors and talking to each other using string cups'
  },

  {
    title: 'World Religions',
    level: 'Level 2',
    code: 'GED5006',
    description: "This course introduces students to the major religions of the world and their basic teachings. Students explore the differences and similarities between Hinduism, Buddhism, Judaism, Christianity, Islam, and the Baha'i Faith, and learn how these religions shape the lives of their followers. The course aims to broaden students' worldviews and promote understanding of different religious beliefs and practices.",
    image: 'assets/img/world religions.jpg',
    alt: 'a pole that has 5 arrows each representing 5 different religions. Where Christianity is represented by green, Islam in yellow, Judaism in orange, Buddhism in red, and hinduism in pink'
  },


];

const searchInput = document.getElementById('search-bar');
const levelFilter = document.getElementById('levelFilter');
const sortButton = document.getElementById('sortButton');
const courseList = document.getElementById('course-list');

// function to display courses
function displayCourses(courses) {
  // clear course list
  courseList.innerHTML = '';

  // loop through courses and create course list items
  for (i = 0; i < courses.length; i++) {
    const listItem = document.createElement('div');
    listItem.classList.add('border-container')
    listItem.innerHTML = `
      <h3>${courses[i].title}</h3>
      <p>Level: ${courses[i].level}</p>
      <p>Code: ${courses[i].code}</p>
      <p>${courses[i].description}</p>
      <img src="${courses[i].image}" alt="${courses[i].alt}">
      </div>
    `;
    courseList.appendChild(listItem);
  };
}


// initial display of all courses
displayCourses(courses);


// event listener for search input
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchTerm));
  displayCourses(filteredCourses);
});

// event listener for level filter
levelFilter.addEventListener('change', () => {
  const selectedLevel = levelFilter.value;
  if (selectedLevel === 'all') {
    displayCourses(courses);
  } else {
    const filteredCourses = courses.filter(course => course.level === selectedLevel);
    displayCourses(filteredCourses);
  }
});

const sortByLevel = document.querySelector('#sort-by-level');

sortByLevel.addEventListener('change', () => {
  const sortOrder = sortByLevel.value;

  const sortedCourses = [...courses].sort((a, b) => {
    const compare = a.level.localeCompare(b.level);
    return sortOrder === 'asc' ? compare : -compare;
  });

  displayCourses(sortedCourses);
});
