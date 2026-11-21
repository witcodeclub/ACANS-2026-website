import React from 'react';

interface StatusBadgeProps {
  status: string;
}

const statusLabels: Record<string, string> = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  cancelled: 'Cancelled',
  not_submitted: 'Not Submitted',
  submitted: 'Submitted',
  under_verification: 'Under Verification',
  verified: 'Verified',
  rejected: 'Rejected',
  draft: 'Draft',
  under_review: 'Under Review',
  accepted: 'Accepted',
  revision_requested: 'Revision Requested',
  workshop: 'Seminar Theme',
  conference: 'Related Technical Topic',
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const normalized = status.toLowerCase();
  const label = statusLabels[normalized] || status;
  const className = `badge badge-${normalized}`;

  return (
    <span className={className}>
      {label}
    </span>
  );
}
