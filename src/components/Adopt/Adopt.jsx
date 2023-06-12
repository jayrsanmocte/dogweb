import React from 'react';

const Adopt = () => {
  return (
    <div>
      <h2>Adopt a shelter cat or dog</h2>
      <p>
        Our adoptable cats and dogs are all spayed/neutered (kapon) and vaccinated.
        Because they lived a difficult life before being rescued, we need to be sure
        that they get adopted by loving humans and won’t be subjected to further cruelty or neglect.
      </p>
      <h3>Here’s how to apply:</h3>
      <ol>
        {/* Steps for adoption */}
        <li>Submit the adoption application form</li>
        <li>Attend the Zoom interview</li>
        <li>Meet our shelter animals in person</li>
        <li>Visit your chosen pet to confirm your choice</li>
        <li>Wait for vet clearance and schedule pick up</li>
        <li>Pay the adoption fee of P500 (cat) / P1000 (dog)</li>
        <li>Take your pet home!</li>
      </ol>
      <button>Apply Now</button>

      <h3>Adoption FAQ</h3>
      <ul>
        {/* Adoption FAQ items */}
        <li>
          <strong>How can I adopt from PAWS?</strong>
          <p>
            Applicants go through a screening process to ensure that our rescued animals go to loving homes.
            The process includes an online interview via Zoom and at least two (2) separate shelter visits to meet and get to know your chosen pet.
            Apply <a href="/adoption-application">here</a>.
          </p>
        </li>
        <li>
          <strong>Can you adopt my pet?</strong>
          <p>
            PAWS does NOT adopt owned pets. We already have 300+ shelter animals rescued from cruelty and neglect that are waiting to be adopted.
            If you need to give up your pet for some reason, please consider other options or apply for rehoming assistance.
          </p>
        </li>
        {/* Add more FAQ items as needed */}
      </ul>

      <h3>Available Dogs</h3>
      <div className="dog-photos">
        <img src="/path/to/dog1.jpg" alt="Dog 1" />
        <img src="/path/to/dog2.jpg" alt="Dog 2" />
        <img src="/path/to/dog3.jpg" alt="Dog 3" />
        {/* Add more dog photos as needed */}
      </div>
    </div>
  );
};

export default Adopt;
