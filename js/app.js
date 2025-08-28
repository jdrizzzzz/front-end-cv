// Dynamic Resume Builder Class
class ResumeBuilder {
  constructor() {
    this.app = document.getElementById('app');
    this.data = null;
  }

  // Load resume data from JSON file
  async loadData() {
    try {
      const response = await fetch('./data/resume.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.data = await response.json();
    } catch (error) {
      console.error('Error loading resume data:', error);
      // Fallback: show error message
      this.app.innerHTML = `
        <div class="container mt-5">
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Error Loading Resume Data</h4>
            <p>Unable to load resume data. Please check that the data/resume.json file exists and is properly formatted.</p>
            <p class="mb-0">Error: ${error.message}</p>
          </div>
        </div>
      `;
      return false;
    }
    return true;
  }

  // Create navigation bar
  createNavigation() {
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top';
    nav.innerHTML = `
      <div class="container">
        <a class="navbar-brand fw-bold" href="#home">
          <i class="bi bi-person-circle me-2"></i>${this.data.header.name}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link" href="#experience">Experience</a></li>
            <li class="nav-item"><a class="nav-link" href="#education">Education</a></li>
            <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    `;
    return nav;
  }

  // Create header section
  createHeader() {
    const header = document.createElement('section');
    header.id = 'home';
    header.className = 'bg-primary text-white py-5 mt-5';
    header.innerHTML = `
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-md-4">
            <img src="${this.data.header.profileImage}" 
                 alt="${this.data.header.name}" 
                 class="profile-pic img-fluid rounded-circle mb-3"
                 style="width: 200px; height: 200px; object-fit: cover; cursor: pointer; transition: transform 0.5s ease;"
                 onclick="this.classList.toggle('flipped')"
                 tabindex="0"
                 role="button"
                 aria-label="Click to flip profile picture">
          </div>
          <div class="col-md-8">
            <h1 class="display-4 fw-bold mb-3">${this.data.header.name}</h1>
            <h2 class="h3 text-white-50 mb-4">${this.data.header.title}</h2>
            <div class="row">
              <div class="col-md-6">
                <p><i class="bi bi-envelope-fill me-2" aria-hidden="true"></i>
                   <a href="mailto:${this.data.header.contact.email}" class="text-white text-decoration-none">
                     ${this.data.header.contact.email}
                   </a></p>
                <p><i class="bi bi-telephone-fill me-2" aria-hidden="true"></i>
                   <a href="tel:${this.data.header.contact.phone}" class="text-white text-decoration-none">
                     ${this.data.header.contact.phone}
                   </a></p>
              </div>
              <div class="col-md-6">
                <p><a href="${this.data.header.contact.linkedin}" class="text-white text-decoration-none" target="_blank" rel="noopener">
                  <i class="bi bi-linkedin me-2" aria-hidden="true"></i>LinkedIn Profile</a></p>
                <p><a href="${this.data.header.contact.portfolio}" class="text-white text-decoration-none" target="_blank" rel="noopener">
                  <i class="bi bi-globe me-2" aria-hidden="true"></i>Portfolio Website</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return header;
  }

  // Create about section
  createAbout() {
    const about = document.createElement('section');
    about.id = 'about';
    about.className = 'py-5';
    about.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-center mb-5"><i class="bi bi-person-lines-fill me-3" aria-hidden="true"></i>About Me</h2>
            <div class="card shadow">
              <div class="card-body p-4">
                <p class="lead">${this.data.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return about;
  }

  // Create skills section
  createSkills() {
    const skills = document.createElement('section');
    skills.id = 'skills';
    skills.className = 'py-5 bg-light';
    
    let skillsHTML = `
      <div class="container">
        <h2 class="text-center mb-5"><i class="bi bi-gear-fill me-3" aria-hidden="true"></i>Skills & Expertise</h2>
        <div class="row">
    `;

    Object.entries(this.data.skills).forEach(([category, skillList]) => {
      skillsHTML += `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <h3 class="h5 card-title text-primary">${category}</h3>
              <ul class="list-unstyled">
                ${skillList.map(skill => `<li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2" aria-hidden="true"></i>${skill}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    });

    skillsHTML += `
        </div>
      </div>
    `;
    
    skills.innerHTML = skillsHTML;
    return skills;
  }

  // Create experience section with accordion (Lab Feature)
  createExperience() {
    const experience = document.createElement('section');
    experience.id = 'experience';
    experience.className = 'py-5';
    
    let experienceHTML = `
      <div class="container">
        <h2 class="text-center mb-5"><i class="bi bi-briefcase-fill me-3" aria-hidden="true"></i>Professional Experience</h2>
        <div class="accordion" id="experienceAccordion">
    `;

    this.data.experience.forEach((job, index) => {
      experienceHTML += `
        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapse${index}" 
                    aria-expanded="${index === 0 ? 'true' : 'false'}"
                    aria-controls="collapse${index}">
              <div class="w-100">
                <div class="d-flex justify-content-between align-items-center">
                  <strong>${job.title} at ${job.company}</strong>
                  <span class="badge bg-primary ms-2">${job.period}</span>
                </div>
              </div>
            </button>
          </h3>
          <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
               data-bs-parent="#experienceAccordion">
            <div class="accordion-body">
              <ul class="list-unstyled">
                ${job.responsibilities.map(resp => `<li class="mb-2"><i class="bi bi-arrow-right-circle-fill text-primary me-2" aria-hidden="true"></i>${resp}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
    });

    experienceHTML += `
        </div>
      </div>
    `;
    
    experience.innerHTML = experienceHTML;
    return experience;
  }

  // Create education section
  createEducation() {
    const education = document.createElement('section');
    education.id = 'education';
    education.className = 'py-5 bg-light';
    
    let educationHTML = `
      <div class="container">
        <h2 class="text-center mb-5"><i class="bi bi-mortarboard-fill me-3" aria-hidden="true"></i>Education</h2>
        <div class="row justify-content-center">
    `;

    this.data.education.forEach(edu => {
      educationHTML += `
        <div class="col-md-8">
          <div class="card shadow">
            <div class="card-body text-center">
              <h3 class="h4 card-title text-primary">${edu.school}</h3>
              <h4 class="h5 text-muted mb-3">${edu.program}</h4>
              <p><strong>Period:</strong> ${edu.period}</p>
              <span class="badge bg-success">${edu.status}</span>
            </div>
          </div>
        </div>
      `;
    });

    educationHTML += `
        </div>
      </div>
    `;
    
    education.innerHTML = educationHTML;
    return education;
  }

  // Create projects section
  createProjects() {
    const projects = document.createElement('section');
    projects.id = 'projects';
    projects.className = 'py-5';
    
    let projectsHTML = `
      <div class="container">
        <h2 class="text-center mb-5"><i class="bi bi-code-square me-3" aria-hidden="true"></i>Projects & Certifications</h2>
        <div class="row">
    `;

    this.data.projects.forEach(project => {
      projectsHTML += `
        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h3 class="h5 card-title text-primary">${project.name}</h3>
              <p class="card-text">${project.description}</p>
              <div class="mt-3">
                <strong>Technologies:</strong>
                <div class="mt-2">
                  ${project.technologies.map(tech => `<span class="badge bg-secondary me-1 mb-1">${tech}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    projectsHTML += `
        </div>
      </div>
    `;
    
    projects.innerHTML = projectsHTML;
    return projects;
  }

  // Create contact section
  createContact() {
    const contact = document.createElement('section');
    contact.id = 'contact';
    contact.className = 'py-5 bg-dark text-white';
    contact.innerHTML = `
      <div class="container text-center">
        <h2 class="mb-5"><i class="bi bi-envelope-fill me-3" aria-hidden="true"></i>Get In Touch</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <p class="lead mb-4">Ready to discuss opportunities or collaborate on projects?</p>
            <div class="row">
              <div class="col-md-6 mb-3">
                <a href="mailto:${this.data.header.contact.email}" class="btn btn-primary btn-lg w-100">
                  <i class="bi bi-envelope-fill me-2" aria-hidden="true"></i>Send Email
                </a>
              </div>
              <div class="col-md-6 mb-3">
                <a href="${this.data.header.contact.linkedin}" class="btn btn-outline-light btn-lg w-100" target="_blank" rel="noopener">
                  <i class="bi bi-linkedin me-2" aria-hidden="true"></i>Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return contact;
  }

  // Initialize and render the complete resume
  async render() {
    // Load data first
    const dataLoaded = await this.loadData();
    if (!dataLoaded) {
      return; // Error message already displayed
    }

    // Clear the app container
    this.app.innerHTML = '';
    
    // Create and append all sections
    this.app.appendChild(this.createNavigation());
    this.app.appendChild(this.createHeader());
    this.app.appendChild(this.createAbout());
    this.app.appendChild(this.createSkills());
    this.app.appendChild(this.createExperience());
    this.app.appendChild(this.createEducation());
    this.app.appendChild(this.createProjects());
    this.app.appendChild(this.createContact());
    
    // Initialize interactive features after content is loaded
    this.initSmoothScrolling();
    this.initKeyboardSupport();
  }

  // Initialize smooth scrolling for navigation links
  initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Initialize keyboard support for interactive elements
  initKeyboardSupport() {
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
      profilePic.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.classList.toggle('flipped');
        }
      });
    }
  }
}

// Initialize the resume when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const resume = new ResumeBuilder();
  resume.render();
});