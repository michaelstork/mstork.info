
export default {
    inserted: function (el, binding) {
        el.style.opacity = 0;

        const img = new Image();
        img.addEventListener('load', function () {
            el.style.opacity = 1;
        });

        img.src = (binding.value || el.src);
    }
}