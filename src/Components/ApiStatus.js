import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function ApiStatus() {
  const unavailable = useSelector(state => Object.values(state).some(slice => slice?.error));
  if (!unavailable) return null;
  return <Container className="pt-3"><Alert variant="warning" role="alert">تعذر تحميل بعض البيانات من الخادم. تأكدي من تشغيل خدمة المتجر وإعداد عنوانها، ثم أعيدي المحاولة بتحديث الصفحة.</Alert></Container>;
    }
