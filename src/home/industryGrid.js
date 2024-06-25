import React from 'react';
import warehouseImage from '../images/warehouse.jpg'
import manufacturingImage from '../images/manufacturing.jpg'
import constructionImage from '../images/construction.jpg'
import educationImage from '../images/education.jpg'
import healthcareImage from '../images/healthcare.jpg'
import hospitalityImage from '../images/hospitality.jpg'
import retailImage from '../images/retail.jpg'
import publicImage from '../images/public.jpg'


const industries = [
    { name: 'Warehouse', imgSrc: warehouseImage },
    { name: 'Manufacturing', imgSrc: manufacturingImage },
    { name: 'Construction', imgSrc: constructionImage },
    { name: 'Education', imgSrc: educationImage },
    { name: 'Healthcare', imgSrc: healthcareImage },
    { name: 'Hospitality', imgSrc: hospitalityImage },
    { name: 'Retail', imgSrc: retailImage },
    { name: 'Public Sector', imgSrc: publicImage }
];

const IndustryCard = ({ name, imgSrc }) => (
    <div className="industry-card">
        <img src={imgSrc} alt={name} />
        <div className="caption">{name}</div>
    </div>
);

const IndustryGrid = () => {
    return (
        <div className="industry-grid">
            {industries.map(industry => <IndustryCard key={industry.name} {...industry} />)}
        </div>
    );
};

export default IndustryGrid;

