export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'mod',
}

export enum BookStatus{
    PENDING = 'pending',
    APPROVED = 'approved',
    CANCELLED = 'cancelled'
}

export enum PaymentStatus{
    PENDING = 'pending',
    SENT = 'sent',
    REFUNDED = 'refunded'
}

export enum CourtStatus{
    LOCKED = 'locked',
    ACTIVE = 'active',
    DEACTIVATE = 'deactivate'
}