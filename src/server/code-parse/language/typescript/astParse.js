// TODO: add by config
/**
 [
 'flow',
 'bigInt',
 ]
 */
const config = {
  sourceType: 'module',
  plugins: [
    'jsx',
    'typescript',
    'asyncGenerators',
    'classProperties',
    'classPrivateProperties',
    'classPrivateMethods',
    'doExpressions',
    'dynamicImport',
    'exportDefaultFrom',
    'exportNamespaceFrom',
    'functionBind',
    'functionSent',
    'importMeta',
    'logicalAssignment',
    'nullishCoalescingOperator',
    'numericSeparator',
    'objectRestSpread',
    'optionalCatchBinding',
    'optionalChaining',
    'throwExpressions',
    ['decorators', { decoratorsBeforeExport: true }]
  ]
};

const getNodeLines = node => [node.loc.start.line, node.loc.end.line];

module.exports = {
  config,
  getNodeLines
};
