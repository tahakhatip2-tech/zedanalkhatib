import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

interface BreadcrumbItem {
  labelAr: string;
  labelEn: string;
  path?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items = [], className = '' }: BreadcrumbsProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  
  const homeLabel = language === 'ar' ? 'الرئيسية' : 'Home';
  
  // إنشاء breadcrumbs تلقائياً إذا لم يتم توفير items
  const defaultItems: BreadcrumbItem[] = [];
  
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  pathSegments.forEach((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    let labelAr = segment;
    let labelEn = segment;
    
    // تحديد التسميات بناءً على المسار
    if (segment === 'blog') {
      labelAr = 'المدونة';
      labelEn = 'Blog';
    } else if (segment === 'portfolio') {
      labelAr = 'معرض الأعمال';
      labelEn = 'Portfolio';
    }
    
    defaultItems.push({ labelAr, labelEn, path });
  });
  
  const breadcrumbItems = items.length > 0 ? items : defaultItems;
  
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center gap-1.5">
              <Home className="h-4 w-4" />
              {homeLabel}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {breadcrumbItems.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === breadcrumbItems.length - 1 || !item.path ? (
                <BreadcrumbPage>
                  {language === 'ar' ? item.labelAr : item.labelEn}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={item.path}>
                    {language === 'ar' ? item.labelAr : item.labelEn}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
