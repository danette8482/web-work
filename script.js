document.addEventListener('DOMContentLoaded', function () {
  // Elements
  const toggleBtn = document.getElementById('toggle-details-btn');
  const moreDetails = document.getElementById('more-details');

  // Call modal
  const callModal = document.getElementById('call-modal');
  const callBtn = document.getElementById('call-now-btn');

  // Floor plan modal
  const floorModal = document.getElementById('floor-modal');
  const floorBtn = document.getElementById('floor-plan-btn');

  // Close buttons
  const closeBtns = document.querySelectorAll('.close-btn');

  // --- Read More / Read Less ---
  toggleBtn.addEventListener('click', function () {
    const isHidden = moreDetails.style.display === 'none' || moreDetails.style.display === '';
    if (isHidden) {
      moreDetails.style.display = 'block';
      toggleBtn.textContent = 'Read Less';
    } else {
      moreDetails.style.display = 'none';
      toggleBtn.textContent = 'Read More';
    }
  });

  // --- Call Now Modal ---
  callBtn.addEventListener('click', function () {
    callModal.style.display = 'block';
  });

  // --- Floor Plan Modal ---
  floorBtn.addEventListener('click', function () {
    floorModal.style.display = 'block';
  });

  // --- Close buttons (works for both modals) ---
  closeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      callModal.style.display = 'none';
      floorModal.style.display = 'none';
    });
  });

  // --- Close when clicking outside modal ---
  window.addEventListener('click', function (event) {
    if (event.target === callModal) callModal.style.display = 'none';
    if (event.target === floorModal) floorModal.style.display = 'none';
  });
});
