import React from "react";
import down from "../assets/down.png";
import top from "../assets/top.png";

const Questions = () => {
    
  const questionAnswer = [
    {
      question: "Почему цены на ваши услуги ниже, чем у конкурентов?",
      answer:
        "Мы стремимся предложить наши услуги по наиболее конкурентоспособным ценам, чтобы обеспечить удобство и доступность для наших клиентов.",
    },
    {
      question: "Как вы гарантируете качество услуг?",
      answer:
        "Мы используем только безопасные и эффективные методы, которые позволяют нам гарантировать высокое качество наших услуг.",
    },
    {
      question: "Как я могу узнать о статусе моего заказа?",
      answer:
        "Вы можете отслеживать статус своего заказа через свой личный кабинет на нашем сайте.",
    },
    {
      question: "Как быстро выполняется заказ?",
      answer:
        "Срок выполнения заказа зависит от типа и объема услуги, которую вы заказываете. Обычно мы указываем срок выполнения в описании услуги.",
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer:
        "Мы принимаем оплату различными способами, такими как банковские карты, Qiwi-кошелек, Payeer и криптовалюты.",
    },
    {
      question: "Меня не заблокируют?",
      answer:
        "Мы используем только безопасные и этичные методы привлечения подписчиков и лайков, которые не нарушают условия использования социальных сетей.",
    },
    {
      question: "Как я могу связаться с вами?",
      answer:
        "Вы можете связаться с нами через онлайн-чат на сайте или через социальные сети.",
    },
    {
      question: "Что произойдет, если мои подписчики или лайки уйдут?",
      answer:
        "Мы предлагаем гарантию возврата денег на баланс в случае удаления подписчиков или лайков, а так же предоставляем гарантию от списаний по некоторым услугам в течение 1 месяца.",
    },
  ];
  
  return (
    <div className="max-w-[1220px] mx-auto">
      <h2 className="text-center text-[32px] font-semibold mb-[20px]">
        Частые вопросы
      </h2>
      <div className="grid grid-cols-2 gap-[20px]">
        {questionAnswer.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#F8F8F9] p-[20px] cursor-pointer text-[16px] font-medium rounded-[10px]"
            >
              <div className="flex justify-between items-center pb-[18px]">
                <p>{item.question}</p>
                <img src={down} alt="down" />
              </div>
              <div className="pt-[10px] border-t border-[#E9E9E9]">
                <p className="font-normal">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
