import React from 'react';
import {useParams } from 'react-router-dom';
import categories from '../data/categories.json';
import '../assets/css/placedetail.css';
import { useLocation, Link } from 'react-router-dom';
import NotFound from './Common/NotFound';
import BackButton from './Common/BackButton';

function PlaceDetail() {
    const { id } = useParams();
    const location = useLocation();
    const { categoryId } = location.state || {};

    console.log("PlaceDetail - categoryId from location.state:", categoryId);

    // Flatten all places across categories
    const allPlaces = categories.flatMap(category =>
        category.places?.map(place => ({
            ...place,
            category: category.title,
            categorySlug: category.slug, // Adding the category slug
            id: place.id || place.name.toLowerCase().replace(/\s+/g, '')
        })) || []
    );

    const place = allPlaces.find(p => p.id === id);

    if (!place) return <NotFound />;

    

    return (
        <div className="place-detail">
            <BackButton />
            <div className="banner" style={{ backgroundImage: `url(${place.image})` }}>
                <div className="overlay">
                    <h1>{place.name}</h1>
                    <p>{place.tagline || "A wonderful experience awaits!"}</p>
                </div>
            </div>

            <div className="detail-content">
                <section>
                    <h2>Overview</h2>
                    <p>{place.description || "No description available."}</p>
                </section>

                <section>
                    <h2>Price & Budget</h2>
                    <p>{place.price ? `₹${place.price}` : "Check with provider."}</p>
                    <p>{place.budget ? `Recommended Budget: ₹${place.budget}` : ""}</p>
                </section>

                <section>
                    <h2>How to Reach</h2>
                    <p>{place.routes || "Various travel options available depending on your location."}</p>
                </section>

                <section>
                    <h2>Nearby Hotels</h2>
                    <ul>
                        {(place.hotels || []).map((hotel, index) => (
                            <li key={index}>{hotel}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Rules & Guidelines</h2>
                    <ul>
                        {(place.rules || ["Follow local laws", "Respect environment"]).map((rule, index) => (
                            <li key={index}>{rule}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Reviews</h2>
                    <div className="reviews">
                        {(place.reviews || []).map((r, i) => (
                            <div key={i} className="review-card">
                                <strong>{r.user || "Anonymous"}</strong>
                                <p>{r.comment}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PlaceDetail;
