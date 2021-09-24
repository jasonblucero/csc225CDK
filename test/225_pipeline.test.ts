import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as 225Pipeline from '../lib/225_pipeline-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new 225Pipeline.225PipelineStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
