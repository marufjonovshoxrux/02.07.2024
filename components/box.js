export function createBox(item, times) {
    const box = document.createElement('div');
    const text_span = document.createElement('span');
    const btn_close = document.createElement('button');
    const img_close = document.createElement('img');
    const span_hour = document.createElement('span');

    box.classList.add('box');
    text_span.classList.add('text_span');
    btn_close.classList.add('close');
    img_close.classList.add('img_close');
    span_hour.classList.add('hour');

    text_span.innerHTML = item;
    span_hour.innerHTML = times;
    img_close.src = './img/close.png';
    img_close.alt = 'close';

    box.append(text_span, btn_close, span_hour);
    btn_close.append(img_close);


    btn_close.onclick = () => {
        box.remove();
    };

    return box;
}