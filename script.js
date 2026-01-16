// حاسبة التكلفة التقريبية (اختياري)
const calculateEstimate = () => {
    console.log("حاسبة التكلفة - إضافة اختيارية");
    // يمكن إضافة حاسبة بسيطة إذا لزم الأمر
};

// تتبع التحويلات - نسخة بسيطة ومتوافقة
document.addEventListener('DOMContentLoaded', function() {
    // تتبع النقر على الهاتف الرئيسي
    const mainCta = document.getElementById('mainCta');
    if (mainCta) {
        mainCta.addEventListener('click', function() {
            // تتبع Google Ads (اضف ID الخاص بك)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'AW-666953375',
                    'value': 1.0,
                    'currency': 'SAR'
                });
            }
            
            // تتبع بسيط للتحليلات
            console.log('تم النقر على CTA الرئيسي - استشارة مجانية');
        });
    }
    
    // تتبع جميع روابط الهاتف
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_call', {
                    'phone_number': '0505333584'
                });
            }
            
            // تتبع محلي
            console.log('تم النقر على رقم الهاتف: 0505333584');
        });
    });
    
    // تتبع واتساب
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'Contact',
                    'event_label': 'WhatsApp Button'
                });
            }
            
            console.log('تم النقر على زر الواتساب');
        });
    }
    
    // تتبع الهاتف من التتبع الإضافي
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'phone_click', {
                    'event_category': 'Contact',
                    'event_label': 'Phone Call'
                });
            }
        });
    });
    
    // تأثير التمرير البسيط للنافبار
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.main-nav');
        if (nav) {
            if (window.scrollY > 100) {
                nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            } else {
                nav.style.boxShadow = 'var(--shadow-lg)';
            }
        }
    });
    
    // تحسين الأداء: تأخير تحميل الصور غير المرئية
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            if (img.dataset.src) {
                imageObserver.observe(img);
            }
        });
    };
    
    // تفعيل التأخير إذا كان هناك الكثير من الصور
    if (document.querySelectorAll('img').length > 10) {
        lazyLoadImages();
    }
    
    // تحسين تجربة المستخدم: إضافة رسالة تأكيد للاتصال
    const contactButtons = document.querySelectorAll('a[href^="tel:"], a[href*="wa.me"]');
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // يمكن إضافة رسالة تأكيد هنا
            console.log('سيتم فتح تطبيق للاتصال');
        });
    });
});

// تهيئة Google Analytics (إذا كان مضافاً)
function initGoogleAnalytics() {
    if (typeof gtag !== 'undefined') {
        console.log('Google Analytics جاهز للتتبع');
    }
}

// تهيئة Facebook Pixel (إذا كان مضافاً)
function initFacebookPixel() {
    if (typeof fbq !== 'undefined') {
        console.log('Facebook Pixel جاهز للتتبع');
    }
}

// دالة لحساب السعر التقريبي (يمكن تطويرها)
function estimatePrice(area, serviceType) {
    const prices = {
        'عزل أسطح المنازل': 25,
        'عزل اسطح مباني المياه': 1500,
        'عزل حمامات السباحة': 40,
        'عزل الأسطح الخرسانية': 30,
        'عزل الأسطح المعدنية': 35
    };
    
    if (serviceType === 'عزل اسطح مباني المياه') {
        return prices[serviceType];
    }
    
    return area * (prices[serviceType] || 30);
}

// تصدير الدوال للاستخدام في وحدة التحكم (للتطوير)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateEstimate,
        estimatePrice,
        initGoogleAnalytics,
        initFacebookPixel
    };
}