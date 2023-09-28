import React from 'react'
import Title from '../../components/title/Title'
import './styles.css'

const PrivacyPolicy = () => {
  return (
    <div className="conditions container">
        <Title title={'سياسة الخصوصية'} />
        <pre className="gray-bg text-color text">
        يرجى قراءة بيان سياسة الخصوصية بشكل جيد ودقيق حتى تفهم ممارستنا. فيا يتعلق الامر بمعلوماتك هذه السياسة تخضع لتغييرات بشكل دوري، لذا ننصحك بإلقاء نظرة عليها من فترة الى اخرى. <br/>
        تقديم المعلومات الشخصية ليس ضروريا لتصفح الموقع. لكن من اجل حجز دورة او اضافة دورة  يجب التسجيل أولا في الموقع وتوفير معلومات (الاسم الكامل، البريد الالكتروني، العنوان…الخ)  كما يجوز لك في أي وقت التعديل عليها . <br/>
        تلتزم إدارة موقع <span>EduTime </span>بعدم كشف عن أي معلومات شخصية عن المستخدم مثل العنوان أو رقم الهاتف أو عنوان البريد الإلكتروني وغيرها. <br/>
        تحفظ بيانات جميع المستخدمين المسجلين في هذا الموقع حتى إلغاء التسجيل. يتم تخزين هذه البيانات في ظل ظروف آمنة تقنيا، ويتعهد موقعنا بعدم نشر المعلومات او اعطائها لاي طرف ثالث مهما كان الا في حال موافقة المستخدمين على ذلك او الحالات التي ينص عليها القانون، غير ذلك بيانات المستخدمين لا تنقل الى اي جهة خارجية خارج موقعنا. <br/>
        تحتفظ ادارة الموقع بالحق في مراقبة أي محتوى يدخله المستخدم (لا نستطيع مراقبة كل مدخلات المستخدمين نظرا لعددهم) ، لكن في النفس الوقت تحتفظ بالحق (من دون التزام) في حذف أو إزالة أو تحرير أي مواد مدخلة من شأنها انتهاك شروط وأحكام الموقع دون الرجوع للمستخدم. <br/>
        </pre>
    </div>
  )
}

export default PrivacyPolicy