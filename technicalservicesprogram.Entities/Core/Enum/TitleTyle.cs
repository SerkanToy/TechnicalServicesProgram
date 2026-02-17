using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace technicalservicesprogram.Entities.Core.Enum
{
    public enum TitleTyle
    {
        [Display(Name = "Profesör")]
        Profesor = 1,
        [Display(Name = "Doçent")]
        Docent = 2,
        [Display(Name = "Doctor")]
        Doctor = 3,
    }
}
