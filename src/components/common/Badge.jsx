import React from 'react';

export default function Badge({ text, type = 'fresh' }) {
  const badgeTypeMap = {
    'Fresh Bookings': 'badge-fresh',
    'Resale': 'badge-resale',
    'Sale & Purchase': 'badge-luxury',
    'New Launch': 'badge-fresh',
    'Exclusive Launch': 'badge-fresh',
    'Transparent Resale': 'badge-resale',
    'Budget Premium': 'badge-verified',
    'Ultra Luxury': 'badge-luxury',
    'Heritage Estate': 'badge-luxury'
  };

  const selectedClass = badgeTypeMap[text] || badgeTypeMap[type] || 'badge-fresh';

  return (
    <span className={`badge ${selectedClass}`}>
      {text}
    </span>
  );
}
