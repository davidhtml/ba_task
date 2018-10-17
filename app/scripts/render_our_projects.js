export const renderProjects = (project, i) => {
  const markup = `
    <div class="bg-item project${i + 1}">
        <h3>${project.name}</h3>
        <p>
            ${project.text1}
        </p>
        <p>
            ${project.text2}
        </p>
    </div>
    `;

  const gallleryItem = document.querySelector('.flex-item.gallery');

  gallleryItem.insertAdjacentHTML('beforeend', markup);
};
