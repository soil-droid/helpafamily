import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

function VolunteerCard({
  backgroundImageSource,
  backgroundImageAltText,
  children,
}) {
  return (
    <div className="card transition duration-500 ease-in-out transform hover:-translate-y-4 filter brightness-105 shadow-xl image-full">
      {backgroundImageSource && (
        <figure>
          <Image
            alt={backgroundImageAltText}
            layout="fill"
            src={backgroundImageSource}
          />
        </figure>
      )}
      <div className="card-body space-y-3">{children}</div>
    </div>
  );
}

VolunteerCard.propTypes = {
  backgroundImageSource: PropTypes.string,
  backgroundImageAltText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export function CardTitle({ children }) {
  return <span className="card-title m-0">{children}</span>;
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardParagraph({ children }) {
  return <span>{children}</span>;
}

CardParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardAction({ children, linkTo, isPending, onClick }) {
  return (
    <div className="pt-5" style={{ marginTop: 'auto' }}>
      {linkTo ? (
        <a className="btn btn-accent" href={linkTo}>
          {children}
        </a>
      ) : (
        <button
          className={`btn btn-accent w-full h-auto ${
            isPending ? 'loading' : ''
          }`}
          onClick={onClick}
          type="button"
        >
          {children}
        </button>
      )}
    </div>
  );
}

CardAction.propTypes = {
  children: PropTypes.node,
  isPending: PropTypes.bool,
  linkTo: PropTypes.string,
  onClick: PropTypes.func,
};

export function PositionRequirements({ label, children }) {
  return (
    <div className="p-2 shaded-text" style={{ marginTop: 'auto' }}>
      <span className="font-semibold">{label}</span>
      <ul className="list-disc text-left pl-6">
        {children.map(function (listItem, index) {
          return <li key={index}>{listItem}</li>;
        })}
      </ul>
    </div>
  );
}

PositionRequirements.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default VolunteerCard;
