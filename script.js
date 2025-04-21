document.addEventListener('DOMContentLoaded', function() {
    const productForm = document.getElementById('product-form');
    const productsList = document.getElementById('products-list');
    const latestModelsList = document.getElementById('latest-models-list');

    // دالة لإنشاء عنصر منتج جديد
    function createProductElement(name, description, price, imageUrl) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-4');

        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.alt = name;

        const titleElement = document.createElement('h3');
        titleElement.textContent = name;

        const ratingElement = document.createElement('div');
        ratingElement.classList.add('rating');
        // يمكنك إضافة تقييم افتراضي هنا

        const priceElement = document.createElement('p');
        priceElement.textContent = price + ' DA';

        const orderButton = document.createElement('button');
        orderButton.classList.add('order-button');
        orderButton.textContent = 'طلب المنتج';
        orderButton.dataset.productName = name;
        orderButton.dataset.productPrice = price;

        productDiv.appendChild(imageElement);
        productDiv.appendChild(titleElement);
        productDiv.appendChild(ratingElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(orderButton);

        return productDiv;
    }

    // معالجة إرسال نموذج إضافة المنتج
    productForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('product-name').value;
        const productDescription = document.getElementById('product-description').value;
        const productPrice = document.getElementById('product-price').value;
        const productImage = document.getElementById('product-image').files[0];

        if (productName && productDescription && productPrice && productImage) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const newProduct = createProductElement(productName, productDescription, productPrice, e.target.result);
                productsList.appendChild(newProduct); // إضافة المنتج الجديد إلى قائمة "Meilleurs Modèles"

                productForm.reset();
                document.getElementById('preview-image').src = '#';
                document.getElementById('preview-name').textContent = '';
                document.getElementById('preview-description').textContent = '';
                document.getElementById('preview-price').textContent = '';
            };
            reader.readAsDataURL(productImage);
        } else {
            alert('الرجاء ملء جميع الحقول واختيار صورة.');
        }
    });

    // معالجة النقر على زر "طلب المنتج" في أي من القائمتين
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('order-button')) {
            const productName = event.target.dataset.productName;
            const productPrice = event.target.dataset.productPrice;
            alert(`تم طلب المنتج: ${productName} بسعر ${productPrice}`);
            // هنا يمكنك إضافة المزيد من المنطق لمعالجة الطلب،
            // مثل إرسال البيانات إلى سلة التسوق أو صفحة الدفع.
        }
    });

    // كود معاينة المنتج
    const productImageInput = document.getElementById('product-image');
    const previewImage = document.getElementById('preview-image');
    const previewName = document.getElementById('preview-name');
    const previewDescription = document.getElementById('preview-description');
    const previewPrice = document.getElementById('preview-price');

    document.getElementById('product-name').addEventListener('input', function() {
        previewName.textContent = this.value;
    });

    document.getElementById('product-description').addEventListener('input', function() {
        previewDescription.textContent = this.value;
    });

    document.getElementById('product-price').addEventListener('input', function() {
        previewPrice.textContent = this.value + ' DA';
    });

    productImageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        } else {
            previewImage.src = '#';
        }
    });
});