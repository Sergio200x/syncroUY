export const querys ={

    Locales_not_sync:"use EMPRESAS  select sCod_Local as 'Codigo_de_local', [Nombre_local] ,horas  from ( select sCod_Local,DATEDIFF(hour,dFecha_Actividad,GETDATE()) horas, m.local_nombre as [Nombre_local]  from Transfer_UDL AS T     left JOIN DAFIRUZ_ERP.DBO.LOCALES AS M ON M.local_codigo=T.sCod_Local collate SQL_Latin1_General_CP1_CI_AS    where sCod_Local not in ('FLF2','FMLAN_O','PEÑ','FCSJ3_','MSA','M3F','PRU','')     and DATEDIFF(hour,dFecha_Actividad,GETDATE())>6 AND DATEDIFF(hour,dFecha_Actividad,GETDATE())<150) tabla"
}