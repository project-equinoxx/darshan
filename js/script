document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.getElementById('project-list');

    const projects = [
        {
            name: "Project One",
            description: "This project is a web application that helps users track their tasks and increase productivity. Built with React and Node.js.",
            link: "#"
        },
        {
            name: "Project Two",
            description: "An e-commerce platform that provides a seamless shopping experience. Developed with Django and integrated with a payment gateway.",
            link: "#"
        },
        {
            name: "Project Three",
            description: "A mobile application that promotes mental well-being through guided meditations and daily exercises. Created using Flutter.",
            link: "#"
        }
    ];

    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><a href="${project.link}">View Project</a>`;
        projectList.appendChild(li);
    });
});
