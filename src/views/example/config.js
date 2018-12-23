export const rules = {
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' },
    { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
  ],
  region: [{ required: true, message: '请选择地区', trigger: 'change' }],
  date: [
    {
      type: 'date',
      required: true,
      message: '请选择日期',
      trigger: 'change'
    }
  ],
  time: [
    {
      type: 'date',
      required: true,
      message: '请选择时间',
      trigger: 'change'
    }
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: '请至少选择一个类型',
      trigger: 'change'
    }
  ],
  status: [{ required: true, message: '请选择状态', trigger: 'change' }],
  desc: [{ required: true, message: '请填写详细描述', trigger: 'blur' }]
}
