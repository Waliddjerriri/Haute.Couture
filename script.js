document.addEventListener('DOMContentLoaded', function() {
    // نافذة طلب المنتج
    const orderButtons = document.querySelectorAll('.order-button');
    const orderModal = document.getElementById('orderModal');
    const closeButton = document.querySelector('.close-button');
    const confirmOrderButton = document.getElementById('confirmOrder');
    const orderDetailsParagraph = document.getElementById('orderDetails');
    const orderForm = document.getElementById('orderForm');
    const nameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('lastName');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');

    let currentProductName = '';
    let currentProductPrice = '';

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentProductName = this.dataset.productName;
            currentProductPrice = this.dataset.productPrice;
            orderModal.style.display = 'block';
            orderForm.reset();
            orderDetailsParagraph.textContent = '';
        });
    });

    closeButton.addEventListener('click', function() {
        orderModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == orderModal) {
            orderModal.style.display = 'none';
        }
    });

    confirmOrderButton.addEventListener('click', function() {
        const name = nameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const phone = phoneInput.value.trim();
        const address = addressInput.value.trim();

        if (name && lastName && phone && address) {
            const orderMessage = `تم طلب المنتج: ${currentProductName} بسعر ${currentProductPrice} من طرف: ${name} ${lastName}، رقم الهاتف: ${phone}، العنوان: ${address}`;
            orderDetailsParagraph.textContent = orderMessage;
            // يمكنك هنا إضافة كود لإرسال هذه البيانات إلى خادم أو تخزينها محليًا
        } else {
            orderDetailsParagraph.textContent = 'الرجاء ملء جميع الحقول.';
        }
    });

    // زر العودة إلى الأعلى
    const backToTopButton = document.querySelector('.back_to_top');

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // يمكنك تغيير هذا الرقم لتحديد متى يظهر الزر
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // معاينة المنتج عند الإضافة
    const productForm = document.getElementById('product-form');
    const productNameInput = document.getElementById('product-name');
    const productDescriptionInput = document.getElementById('product-description');
    const productPriceInput = document.getElementById('product-price');
    const productImageInput = document.getElementById('product-image');
    const previewImage = document.getElementById('preview-image');
    const previewName = document.getElementById('preview-name');
    const previewDescription = document.getElementById('preview-description');
    const previewPrice = document.getElementById('preview-price');
    const previewContainer = document.getElementById('preview-container');

    // إظهار قسم المعاينة عند التركيز على أي حقل في النموذج
    productNameInput.addEventListener('focus', showPreviewSection);
    productDescriptionInput.addEventListener('focus', showPreviewSection);
    productPriceInput.addEventListener('focus', showPreviewSection);
    productImageInput.addEventListener('focus', showPreviewSection);

    function showPreviewSection() {
        productPreview.style.display = 'block';
    }

    productNameInput.addEventListener('input', function() {
        previewName.textContent = this.value;
    });

    productDescriptionInput.addEventListener('input', function() {
        previewDescription.textContent = this.value;
    });

    productPriceInput.addEventListener('input', function() {
        previewPrice.textContent = this.value ? `${this.value} DA` : '';
    });

    productImageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewImage.style.display = 'block';
            }
            reader.readAsDataURL(file);
        } else {
            previewImage.src = '#';
            previewImage.style.display = 'none';
        }
    });

    productForm.addEventListener('submit', function(event) {
        event.preventDefault(); // منع الإرسال الفعلي للنموذج في هذه المحاكاة
        alert('تمت إضافة المنتج (في هذه المحاكاة فقط)!');
        productForm.reset();
        previewImage.src = '#';
        previewImage.style.display = 'none';
        productPreview.style.display = 'none';
    });
});
